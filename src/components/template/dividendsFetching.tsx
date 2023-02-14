import * as React from "react";
import ErrorInfo from "../level1/errorInfo";
import { fetchDividends } from "../../api/dividendsApi";

const DividendsFetching = ({
  children,
  transactions,
  orders,
  accounts,
  stocks,
}: {
  children: JSX.Element;
  transactions?: Transaction[];
  orders?: Order[];
  accounts?: Account[];
  stocks?: Stock[];
}) => {
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [dividends, setDividends] = React.useState<Dividend[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Dividend[]): void {
    setDividends(data);
    setTemplateReady(true);
  }

  function loadDividends(): void {
    setTemplateReady(false);
    fetchDividends(resolveFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadDividends();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {templateReady && (
        <>
          {React.cloneElement(children, {
            transactions: transactions,
            orders: orders,
            dividends: dividends,
            stocks: stocks,
            accounts: accounts,
          })}
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default DividendsFetching;
