import * as React from "react";
import AccountsFetching from "../components/template/accountsFetching";
import StocksFetching from "../components/template/stocksFetching";
import OrdersFetching from "../components/template/ordersFetching";
import OrdersOverview from "../components/template/orders/ordersOverview";

const OrdersPage = () => {
  return (
    <AccountsFetching>
      <StocksFetching>
        <OrdersFetching>
          <OrdersOverview />
        </OrdersFetching>
      </StocksFetching>
    </AccountsFetching>
  );
};

export default OrdersPage;
