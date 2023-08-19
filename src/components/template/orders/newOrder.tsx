import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import { calculateOrderSum, orderTypes } from "../../../helpers/ordersHelper";
import OrderForm from "../../level2/orderForm";
import { postOrder } from "../../../api/ordersApi";
import { DropdownItem } from "../../../dropdownTypes";

const NewOrder = ({
  stocks,
  accounts,
}: {
  stocks: Stock[];
  accounts: DropdownItem[];
}) => {
  const [date, setDate] = React.useState<string>("");
  const [orderType, setOrderType] = React.useState<DropdownItem>(orderTypes[0]);
  const [stock, setStock] = React.useState<DropdownItem>(
    stocks.map((stock) => {
      return { id: stock.id, value: stock.name };
    })[0]
  );
  const [amount, setAmount] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [cost, setCost] = React.useState<string>("");
  const [from, setFrom] = React.useState<DropdownItem>(accounts[0]);
  const [to, setTo] = React.useState<DropdownItem>(accounts[0]);

  function resolvePost(): void {
    navigate("/orders");
  }

  function addNewOrder(): void {
    postOrder(resolvePost, {
      date: date,
      orderType: orderType.value,
      stock: stock.id,
      amount: parseInt(amount),
      price: parseFloat(price),
      cost: parseFloat(cost),
      from: from.id,
      to: to.id,
      sum: calculateOrderSum(orderType.value, amount, price, cost),
    });
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewOrder();
  };

  return (
    <div className="gameLayout">
      <div className="overviewCard">
        <Headline text="Add a new order" style="cardHeadline" />
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
          stocks={stocks.map((stock) => {
            return { id: stock.id, value: stock.name };
          })}
        />
      </div>
    </div>
  );
};

export default NewOrder;
