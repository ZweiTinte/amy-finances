import * as React from "react";
import StocksFetching from "../../components/template/stocksFetching";
import OrderForms from "../../components/template/orders/orderForms";
import AccountsFetching from "../../components/template/accountsFetching";

const OrdersPage = ({ params }: { params: { id: string } }) => {
  return (
    <AccountsFetching>
      <StocksFetching>
        <OrderForms id={params.id} />
      </StocksFetching>
    </AccountsFetching>
  );
};

export default OrdersPage;
