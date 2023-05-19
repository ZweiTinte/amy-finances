import * as React from "react";
import TransactionFetching from "../components/template/transactionFetching";
import AccountsFetching from "../components/template/accountsFetching";
import TransactionsOverview from "../components/template/transactions/transactionsOverview";
import CategoriesFetching from "../components/template/categoriesFetching";

const TransactionsPage = () => {
  return (
    <AccountsFetching>
      <CategoriesFetching>
        <TransactionFetching>
          <TransactionsOverview />
        </TransactionFetching>
      </CategoriesFetching>
    </AccountsFetching>
  );
};

export default TransactionsPage;
