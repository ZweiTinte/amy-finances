import { navigate } from "gatsby";
import * as React from "react";
import {
  deleteTransaction,
  updateTransactions,
} from "../../../api/transactionApi";
import Headline from "../../atoms/headline";
import TransactionForm from "../../level3/transactionForm";
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
  accountsData,
  to,
  setTo,
  transactionType,
  setTransactionType,
  recurringEnd,
  setRecurringGap,
  recurringGap,
  recurringPeriod,
  setRecurringEnd,
  setRecurringPeriod,
}: EditTransactionProps) => {
  const deleteSelectedTransaction = () => {
    deleteTransaction(resolveUpdate, id);
  };

  function resolveUpdate(): void {
    navigate("/transactions");
  }

  function updateTransaction(): void {
    updateTransactions(resolveUpdate, {
      id: parseInt(id),
      transactionType: transactionType.value,
      date: date,
      name: name,
      category: category.id,
      amount: parseFloat(amount),
      from: from.id,
      to: to.id,
      recurringEnd: recurringEnd,
      recurringGap: parseInt(recurringGap),
      recurringPeriod: recurringPeriod.value,
    });
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
          accountsData={accountsData}
          to={to}
          setTo={setTo}
          deleteSelectedTransaction={deleteSelectedTransaction}
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          recurringEnd={recurringEnd}
          setRecurringGap={setRecurringGap}
          recurringGap={recurringGap}
          recurringPeriod={recurringPeriod}
          setRecurringEnd={setRecurringEnd}
          setRecurringPeriod={setRecurringPeriod}
        />
      </div>
    </div>
  );
};

export default EditTransaction;
