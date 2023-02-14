import * as React from "react";
import { fetchStocks } from "../../../api/stocksApi";
import ErrorInfo from "../../level1/errorInfo";
import Stocks from "./stocks";
import StocksSidebarRight from "./stocksSidebarRight";

const StocksOverview = ({
  orders,
  stocks,
}: {
  orders?: Order[];
  stocks?: Stock[];
}) => {
  const [stocksReady, setStocksReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [calculatedStocks, setCalculatedStocks] = React.useState<Stock[]>(
    stocks || []
  );
  const [filteredStocks, setFilteredStocks] = React.useState<Stock[]>([]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveStocksFetching(data: Stock[]): void {
    if (orders) {
      setCalculatedStocks(
        data.map((stock) => {
          orders.forEach((order) => {
            if (order.stock === stock.id && order.orderType === "Buy") {
              stock.amount += order.amount;
            } else if (order.stock === stock.id && order.orderType === "Sell") {
              stock.amount -= order.amount;
            }
          });
          return stock;
        })
      );
      setFilteredStocks(calculatedStocks);
      setStocksReady(true);
    } else {
      setError(true);
      setErrorMessage("Problem with fetching orders!");
    }
  }

  function loadStocks(): void {
    setStocksReady(false);
    fetchStocks(resolveStocksFetching, handleError);
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
      {stocksReady && stocks && (
        <>
          <Stocks
            stocks={
              stocks.length > 1
                ? filteredStocks.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                  })
                : stocks
            }
          />
          <StocksSidebarRight
            stocks={calculatedStocks}
            setFilteredStocks={setFilteredStocks}
          />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default StocksOverview;
