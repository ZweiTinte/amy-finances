import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import { postTransaction } from "../../../api/transactionApi";
import { emptyAccountDDItem } from "../../../helpers/accountsHelper";
import TransactionForm from "../../level3/transactionForm";
import { recPeriods, transTypes } from "../../../helpers/transactionConsts";
import { DropdownItem } from "../../../dropdownTypes";
import { getCategory } from "../../../helpers/transactionsHelper";

const NewTransaction = ({
  categoriesDropdown,
}: {
  categoriesDropdown?: DropdownItem[];
}) => {
  const [date, setDate] = React.useState<string>("");
  const [recurringEnd, setRecurringEnd] = React.useState<string>("");
  const [recurringPeriod, setRecurringPeriod] = React.useState<DropdownItem>(
    recPeriods[0]
  );
  const [recurringGap, setRecurringGap] = React.useState<string>("0");
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<DropdownItem>(
    getCategory(categoriesDropdown)
  );
  const [transactionType, setTransactionType] = React.useState<DropdownItem>(
    transTypes[0]
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
    addNewTransaction();
  };

  return (
    <div className="gameLayout">
      <div className="transactionsCard">
        <Headline text="Add a new transaction" style="transactionsHeadline" />
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
  );
};

export default NewTransaction;
