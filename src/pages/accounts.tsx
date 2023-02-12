import * as React from "react";
import TransactionFetching from "../components/template/accounts/transactionFetching";
import OrdersFetching from "../components/template/accounts/ordersFetching";
import StocksFetching from "../components/template/accounts/stocksFetching";
import AccountsFetching from "../components/template/accounts/accountsFetching";
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
