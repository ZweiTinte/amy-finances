import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import ErrorInfo from "../../level1/errorInfo";
import { fetchDividend } from "../../../api/dividendsApi";
import { getStockDDItems } from "../../../helpers/stocksHelper";
import { getAccountDDItem } from "../../../helpers/accountsHelper";
import EditDividend from "./editDividend";

const EditDividendFetching = ({
  stocks,
  accounts,
  id,
}: {
  stocks: Stock[];
  accounts: DropdownItem[];
  id: string;
}) => {
  const [dividendReady, setDividendReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [payDate, setPayDate] = React.useState<string>("");
  const [exDate, setExDate] = React.useState<string>("");
  const [stock, setStock] = React.useState<DropdownItem>(
    getStockDDItems(0, stocks, false)[0]
  );
  const [amountBeforeTax, setAmountBeforeTax] = React.useState<string>("");
  const [taxAmount, setTaxAmount] = React.useState<string>("");
  const [to, setTo] = React.useState<DropdownItem>(accounts[0]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveFetching(data: Dividend): void {
    setPayDate(data.payDate);
    setExDate(data.exDate);
    setStock(getStockDDItems(data.stock, stocks)[0]);
    setAmountBeforeTax(data.amountBeforeTax.toString());
    setTaxAmount(data.taxAmount.toString());
    setTo(getAccountDDItem(data.toAccount, accounts));
    setDividendReady(true);
  }

  function loadDividend(): void {
    setDividendReady(false);
    setError(false);
    setErrorMessage("");
    fetchDividend(resolveFetching, handleError, id);
  }

  React.useEffect(() => {
    loadDividend();
  }, []);

  return (
    <>
      {dividendReady && (
        <EditDividend
          accounts={accounts}
          stocks={stocks.map((stock) => {
            return { id: stock.id, value: stock.name };
          })}
          id={id}
          to={to}
          setTo={setTo}
          stock={stock}
          setStock={setStock}
          payDate={payDate}
          setPayDate={setPayDate}
          exDate={exDate}
          setExDate={setExDate}
          amountBeforeTax={amountBeforeTax}
          setAmountBeforeTax={setAmountBeforeTax}
          taxAmount={taxAmount}
          setTaxAmount={setTaxAmount}
        />
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadDividend} />}
    </>
  );
};

export default EditDividendFetching;
