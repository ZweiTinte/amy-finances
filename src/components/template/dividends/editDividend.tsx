import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import { deleteDividend, updateDividend } from "../../../api/dividendsApi";
import DividendForm from "../../level2/dividendForm";
import { EditDividendProps } from "../../../dividendTypes";

const EditDividend = ({
  id,
  payDate,
  setPayDate,
  exDate,
  setExDate,
  amountBeforeTax,
  setAmountBeforeTax,
  accounts,
  to,
  setTo,
  stocks,
  stock,
  setStock,
  taxAmount,
  setTaxAmount,
}: EditDividendProps) => {
  const deleteSelectedDividend = () => {
    deleteDividend(resolveUpdate, id);
  };

  function resolveUpdate(): void {
    navigate("/dividends");
  }

  function editDividend(): void {
    updateDividend(
      resolveUpdate,
      id,
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
    editDividend();
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
          stocks={stocks}
          deleteSelectedDividend={deleteSelectedDividend}
        />
      </div>
    </div>
  );
};

export default EditDividend;
