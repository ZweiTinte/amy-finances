import * as React from "react";
import TransactionFetching from "../components/template/accounts/transactionFetching";
import OrdersFetching from "../components/template/accounts/ordersFetching";
import StocksFetching from "../components/template/accounts/stocksFetching";
import AccountsFetching from "../components/template/accounts/accountsFetching";

const AccountsPage = () => {
  return (
    <>
      <TransactionFetching>
        <OrdersFetching>
          <StocksFetching>
            <AccountsFetching />
          </StocksFetching>
        </OrdersFetching>
      </TransactionFetching>
    </>
  );
};

export default AccountsPage;
