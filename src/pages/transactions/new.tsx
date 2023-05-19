import * as React from "react";
import NewTransaction from "../../components/template/transactions/newTransaction";
import CategoriesFetching from "../../components/template/categoriesFetching";

const TransactionsPage = () => {
  return (
    <CategoriesFetching>
      <NewTransaction />
    </CategoriesFetching>
  );
};

export default TransactionsPage;
