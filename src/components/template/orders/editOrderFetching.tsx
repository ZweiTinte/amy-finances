import * as React from "react";
import { getOrderType, orderTypes } from "../../../helpers/ordersHelper";
import EditOrder from "./editOrder";
import ErrorInfo from "../../level1/errorInfo";
import { fetchOrder } from "../../../api/ordersApi";
import { getStockDDItems } from "../../../helpers/stocksHelper";
import { getAccountDDItem } from "../../../helpers/accountsHelper";
import { DropdownItem } from "../../../dropdownTypes";

const EditOrderFetching = ({
  stocks,
  accounts,
  id,
}: {
  stocks: Stock[];
  accounts: DropdownItem[];
  id: string;
}) => {
  const [date, setDate] = React.useState<string>("");
  const [orderType, setOrderType] = React.useState<DropdownItem>(orderTypes[0]);
  const [stock, setStock] = React.useState<DropdownItem>(
    getStockDDItems(0, stocks, false)[0]
  );
  const [amount, setAmount] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [cost, setCost] = React.useState<string>("");
  const [from, setFrom] = React.useState<DropdownItem>(accounts[0]);
  const [to, setTo] = React.useState<DropdownItem>(accounts[0]);
  const [orderReady, setOrderReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Order): void {
    setDate(data.date);
    setOrderType(getOrderType(data.orderType));
    setStock(getStockDDItems(data.stock, stocks)[0]);
    setAmount(data.amount.toString());
    setPrice(data.price.toString());
    setCost(data.cost.toString());
    setFrom(getAccountDDItem(data.from, accounts));
    setTo(getAccountDDItem(data.to, accounts));
    setOrderReady(true);
  }

  function loadOrder(): void {
    setOrderReady(false);
    setError(false);
    setErrorMessage("");
    fetchOrder(resolveFetching, handleError, id);
  }

  React.useEffect(() => {
    loadOrder();
  }, []);

  return (
    <>
      {orderReady && (
        <EditOrder
          accounts={accounts}
          stocks={stocks.map((stock) => {
            return { id: stock.id, value: stock.name };
          })}
          id={id}
          date={date}
          setDate={setDate}
          orderType={orderType}
          setOrderType={setOrderType}
          amount={amount}
          setAmount={setAmount}
          price={price}
          setPrice={setPrice}
          cost={cost}
          setCost={setCost}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          stock={stock}
          setStock={setStock}
        />
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadOrder} />}
    </>
  );
};

export default EditOrderFetching;
