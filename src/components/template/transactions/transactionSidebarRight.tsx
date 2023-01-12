import { navigate } from "gatsby";
import * as React from "react";
import Button from "../../atoms/button";
import Dropdown, { DropdownItem, DropdownTypes } from "../../atoms/dropdown";
import Headline from "../../atoms/headline";
import Multiselect from "../../atoms/multiselect";

const TransactionSidebarRight = ({
  transactions,
  setFilteredTransactions,
  filteredTransactionsData,
}: {
  transactions: Transaction[];
  filteredTransactionsData: Transaction[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}) => {
  const transactionsData: DropdownItem[] = transactions.map((transaction) => {
    return { id: transaction.id, value: transaction.name };
  });
  const filteredTransactions: DropdownItem[] = filteredTransactionsData.map(
    (transaction) => {
      return { id: transaction.id, value: transaction.name };
    }
  );
  const [selectedTransaction, setSelectedTransaction] =
    React.useState<DropdownItem>(transactionsData[0]);

  return (
    <div className="sidebarRight">
      <Headline text={"TRANSACTIONS MENU"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton"}
        onClick={() => navigate("/transactions/new")}
        text={"Add New Transaction"}
      />
      <Headline text={"Edit Transaction"} style="sidebarSubHeadline" />
      <Dropdown
        dropDownItem={selectedTransaction}
        setDropdownItem={setSelectedTransaction}
        dropDownData={transactionsData}
        type={DropdownTypes.Id}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => navigate(`/transactions/${selectedTransaction.id}`)}
        text={"Edit"}
      />
      <Headline text={"Filter transactions"} style="sidebarSubHeadline" />
      <Multiselect
        dropDownItems={filteredTransactions}
        setDropdownItems={setFilteredTransactions}
        dropDownData={transactionsData}
        items={transactions}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => setFilteredTransactions(transactions)}
        text={"Select all"}
      />
    </div>
  );
};

export default TransactionSidebarRight;
