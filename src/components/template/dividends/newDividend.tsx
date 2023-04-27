import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import DividendForm from "../../level2/dividendForm";
import { postDividend } from "../../../api/dividendsApi";
import { DropdownItem } from "../../../dropdownTypes";

const NewDividend = ({
  stocks,
  accounts,
}: {
  stocks: Stock[];
  accounts: DropdownItem[];
}) => {
  const [payDate, setPayDate] = React.useState<string>("");
  const [exDate, setExDate] = React.useState<string>("");
  const [stock, setStock] = React.useState<DropdownItem>(
    stocks.map((stock) => {
      return { id: stock.id, value: stock.name };
    })[0]
  );
  const [amountBeforeTax, setAmountBeforeTax] = React.useState<string>("");
  const [taxAmount, setTaxAmount] = React.useState<string>("");
  const [to, setTo] = React.useState<DropdownItem>(accounts[0]);

  function resolvePost(): void {
    navigate("/dividends");
  }

  function addNewDividend(): void {
    postDividend(
      resolvePost,
      payDate,
      exDate,
      parseFloat(amountBeforeTax),
      parseFloat(taxAmount),
      stock.id,
      to.id
    );
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewDividend();
  };

  return (
    <div className="gameLayout">
      <div className="ordersCard">
        <Headline text="Add a new dividend" style="transactionsHeadline" />
        <DividendForm
          submitHandler={submitHandler}
          payDate={payDate}
          setPayDate={setPayDate}
          exDate={exDate}
          setExDate={setExDate}
          amountBeforeTax={amountBeforeTax}
          setAmountBeforeTax={setAmountBeforeTax}
          taxAmount={taxAmount}
          setTaxAmount={setTaxAmount}
          to={to}
          setTo={setTo}
          stock={stock}
          setStock={setStock}
          accounts={accounts}
          stocks={stocks.map((stock) => {
            return { id: stock.id, value: stock.name };
          })}
        />
      </div>
    </div>
  );
};

export default NewDividend;
