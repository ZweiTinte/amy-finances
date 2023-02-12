import * as React from "react";
import ErrorInfo from "../../level1/errorInfo";
import { fetchStocks } from "../../../api/stocksApi";

const StocksFetching = ({
  children,
  transactions,
  orders,
}: {
  children: JSX.Element;
  transactions?: Transaction[];
  orders?: Order[];
}) => {
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [stocks, setStocks] = React.useState<Stock[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Stock[]): void {
    setStocks(data);
    setTemplateReady(true);
  }

  function loadStocks(): void {
    setTemplateReady(false);
    fetchStocks(resolveFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadStocks();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {templateReady && transactions && orders && (
        <>
          {React.cloneElement(children, {
            transactions: transactions,
            orders: orders,
            stocks: stocks,
          })}
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default StocksFetching;
