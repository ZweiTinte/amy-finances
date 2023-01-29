import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import { DropdownItem } from "../../atoms/dropdown";
import { emptyAccountDDItem } from "../../../accountsHelper";
import { orderTypes, postOrder } from "../../../ordersHelper";
import OrderForm from "../../level2/orderForm";

const NewOrder = ({
  stocks,
  accounts,
}: {
  stocks: DropdownItem[];
  accounts: DropdownItem[];
}) => {
  const [date, setDate] = React.useState<string>("");
  const [orderType, setOrderType] = React.useState<DropdownItem>(orderTypes[0]);
  const [stock, setStock] = React.useState<DropdownItem>(stocks[0]);
  const [amount, setAmount] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [cost, setCost] = React.useState<string>("");
  const [from, setFrom] = React.useState<DropdownItem>(emptyAccountDDItem);
  const [to, setTo] = React.useState<DropdownItem>(emptyAccountDDItem);

  function resolvePost(): void {
    navigate("/orders");
  }

  function addNewOrder(): void {
    postOrder(
      resolvePost,
      date,
      orderType.value,
      stock.id,
      parseInt(amount),
      parseFloat(price),
      parseFloat(cost),
      from,
      to
    );
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewOrder();
  };

  return (
    <div className="gameLayout">
      <div className="ordersCard">
        <Headline text="Add a new order" style="transactionsHeadline" />
        <OrderForm
          submitHandler={submitHandler}
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
          accounts={accounts}
          stocks={stocks}
        />
      </div>
    </div>
  );
};

export default NewOrder;
