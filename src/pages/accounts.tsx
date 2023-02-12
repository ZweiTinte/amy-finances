import * as React from "react";
import TransactionFetching from "../components/template/transactionFetching";
import OrdersFetching from "../components/template/ordersFetching";
import StocksFetching from "../components/template/stocksFetching";
import AccountsFetching from "../components/template/accountsFetching";
import AccountsOverview from "../components/template/accounts/accountsOverview";

const AccountsPage = () => {
  return (
    <TransactionFetching>
      <OrdersFetching>
        <StocksFetching>
          <AccountsFetching>
            <AccountsOverview />
          </AccountsFetching>
        </StocksFetching>
      </OrdersFetching>
    </TransactionFetching>
  );
};

export default AccountsPage;
