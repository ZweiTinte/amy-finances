import { navigate } from "gatsby";
import * as React from "react";
import {
  deleteTransaction,
  updateTransactions,
} from "../../../transactionHelper";
import Headline from "../../atoms/headline";
import TransactionForm from "../../level2/transactionForm";
import { EditTransactionProps } from "../../../transactionTypes";

const EditTransaction = ({
  id,
  date,
  setDate,
  name,
  setName,
  category,
  setCategory,
  amount,
  setAmount,
  from,
  setFrom,
  accounts,
  to,
  setTo,
}: EditTransactionProps) => {
  const deleteSelectedTransaction = () => {
    deleteTransaction(resolveUpdate, id);
  };

  function resolveUpdate(): void {
    navigate("/transactions");
  }

  function updateTransaction(): void {
    updateTransactions(
      resolveUpdate,
      id,
      date,
      name,
      category,
      amount,
      from,
      to
    );
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateTransaction();
  };

  return (
    <div className="gameLayout">
      <div className="transactionsCard">
        <Headline text="Edit transaction" style="transactionsHeadline" />
        <TransactionForm
          submitHandler={submitHandler}
          date={date}
          setDate={setDate}
          name={name}
          setName={setName}
          category={category}
          setCategory={setCategory}
          amount={amount}
          setAmount={setAmount}
          from={from}
          setFrom={setFrom}
          accounts={accounts}
          to={to}
          setTo={setTo}
          deleteSelectedTransaction={deleteSelectedTransaction}
        />
      </div>
    </div>
  );
};

export default EditTransaction;
