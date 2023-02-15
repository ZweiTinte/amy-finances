import * as React from "react";
import TransactionFetching from "../components/template/transactionFetching";
import OrdersFetching from "../components/template/ordersFetching";
import StocksFetching from "../components/template/stocksFetching";
import AccountsFetching from "../components/template/accountsFetching";
import AccountsOverview from "../components/template/accounts/accountsOverview";
import DividendsFetching from "../components/template/dividendsFetching";

const AccountsPage = () => {
  return (
    <TransactionFetching>
      <OrdersFetching>
        <StocksFetching>
          <AccountsFetching>
            <DividendsFetching>
              <AccountsOverview />
            </DividendsFetching>
          </AccountsFetching>
        </StocksFetching>
      </OrdersFetching>
    </TransactionFetching>
  );
};

export default AccountsPage;
