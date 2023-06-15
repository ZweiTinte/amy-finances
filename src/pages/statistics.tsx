import * as React from "react";
import StatisticsOverview from "../components/template/statistics/statisticsOverview";
import AccountsFetching from "../components/template/accountsFetching";
import CategoriesFetching from "../components/template/categoriesFetching";
import TransactionFetching from "../components/template/transactionFetching";

const StatisticsPage = () => {
  return (
    <AccountsFetching>
      <CategoriesFetching>
        <TransactionFetching>
          <StatisticsOverview />
        </TransactionFetching>
      </CategoriesFetching>
    </AccountsFetching>
  );
};

export default StatisticsPage;
