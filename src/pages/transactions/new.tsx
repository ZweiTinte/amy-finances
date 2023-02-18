import * as React from "react";
import NewTransaction from "../../components/template/transactions/newTransaction";
import AccountsFetching from "../../components/template/accountsFetching";

const TransactionsPage = () => {
  return (
    <AccountsFetching>
      <NewTransaction />
    </AccountsFetching>
  );
};

export default TransactionsPage;
