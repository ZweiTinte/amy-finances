import * as React from "react";
import StocksFetching from "../../components/template/stocksFetching";
import AccountsFetching from "../../components/template/accountsFetching";
import DividendForms from "../../components/template/dividends/dividendForms";

const OrdersPage = ({ params }: { params: { id: string } }) => {
  return (
    <AccountsFetching>
      <StocksFetching>
        <DividendForms id={params.id} />
      </StocksFetching>
    </AccountsFetching>
  );
};

export default OrdersPage;
