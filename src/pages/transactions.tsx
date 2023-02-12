import * as React from "react";
import TransactionFetching from "../components/template/transactionFetching";
import AccountsFetching from "../components/template/accountsFetching";
import TransactionsOverview from "../components/template/transactions/transactionsOverview";

const TransactionsPage = () => {
  return (
    <AccountsFetching>
      <TransactionFetching>
        <TransactionsOverview />
      </TransactionFetching>
    </AccountsFetching>
  );
};

export default TransactionsPage;
