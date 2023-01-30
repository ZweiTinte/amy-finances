import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import { deleteOrder, updateOrder } from "../../../api/ordersApi";
import OrderForm from "../../level2/orderForm";
import { EditOrderProps } from "../../../orderTypes";
import { calculateOrderSum } from "../../../helpers/ordersHelper";

const EditOrder = ({
  stocks,
  accounts,
  id,
  date,
  setDate,
  amount,
  setAmount,
  from,
  setFrom,
  to,
  setTo,
  stock,
  setStock,
  price,
  setPrice,
  cost,
  setCost,
  orderType,
  setOrderType,
}: EditOrderProps) => {
  const deleteSelectedOrder = () => {
    deleteOrder(resolveUpdate, id);
  };

  function resolveUpdate(): void {
    navigate("/orders");
  }

  function editOrder(): void {
    updateOrder(resolveUpdate, {
      id: parseInt(id),
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
    editOrder();
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
          deleteSelectedOrder={deleteSelectedOrder}
        />
      </div>
    </div>
  );
};

export default EditOrder;
