import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import { DropdownItem } from "../../atoms/dropdown";
import { postTransaction } from "../../../api/transactionApi";
import { emptyAccountDDItem } from "../../../helpers/accountsHelper";
import TransactionForm from "../../level2/transactionForm";
import {
  categories,
  recurringPeriods,
  transactionTypes,
} from "../../../helpers/transactionConsts";

const NewTransaction = ({ accounts }: { accounts?: Account[] }) => {
  const [date, setDate] = React.useState<string>("");
  const [recurringEnd, setRecurringEnd] = React.useState<string>("");
  const [recurringPeriod, setRecurringPeriod] = React.useState<DropdownItem>(
    recurringPeriods[0]
  );
  const [recurringGap, setRecurringGap] = React.useState<string>("0");
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<DropdownItem>(categories[0]);
  const [transactionType, setTransactionType] = React.useState<DropdownItem>(
    transactionTypes[0]
  );
  const [amount, setAmount] = React.useState<string>("");
  const [from, setFrom] = React.useState<DropdownItem>(emptyAccountDDItem);
  const [to, setTo] = React.useState<DropdownItem>(emptyAccountDDItem);

  function resolvePost(): void {
    navigate("/transactions");
  }

  function addNewTransaction(): void {
    postTransaction(resolvePost, {
      transactionType: transactionType.value,
      date: date,
      name: name,
      category: category.value,
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
    addNewTransaction();
  };

  return (
    <>
      {accounts && (
        <div className="gameLayout">
          <div className="transactionsCard">
            <Headline
              text="Add a new transaction"
              style="transactionsHeadline"
            />
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
              accounts={[emptyAccountDDItem].concat(
                accounts.map((account) => {
                  return { id: account.id, value: account.name };
                })
              )}
              to={to}
              setTo={setTo}
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
      )}
    </>
  );
};

export default NewTransaction;
