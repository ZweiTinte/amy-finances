import { navigate } from "gatsby";
import * as React from "react";
import Button from "../../atoms/button";
import Dropdown, { DropdownItem, DropdownTypes } from "../../atoms/dropdown";
import Headline from "../../atoms/headline";
import { categories } from "../../../categoriesHelper";

const TransactionSidebarRight = ({
  transactions,
  setFilteredTransactions,
  filteredTransactionsData,
}: {
  transactions: Transaction[];
  filteredTransactionsData: Transaction[];
  setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}) => {
  const transactionsData: DropdownItem[] = filteredTransactionsData.map(
    (transaction) => {
      return { id: transaction.id, value: transaction.name };
    }
  );
  const [selectedTransaction, setSelectedTransaction] =
    React.useState<DropdownItem>(transactionsData[0]);
  const [selectedCategory, setSelectedCategory] = React.useState<DropdownItem>({
    id: 0,
    value: "All Categories",
  });

  React.useEffect(() => {
    let newTransactions = transactions;
    if (selectedCategory.id !== 0) {
      newTransactions = transactions.filter((trans) => {
        return trans.category === selectedCategory.value;
      });
    }
    setFilteredTransactions(newTransactions);
  }, [selectedCategory]);

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
      <Dropdown
        dropDownItem={selectedCategory}
        setDropdownItem={setSelectedCategory}
        dropDownData={[
          {
            id: 0,
            value: "All Categories",
          },
        ].concat(categories)}
        type={DropdownTypes.Value}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => setFilteredTransactions(transactions)}
        text={"Show all"}
      />
    </div>
  );
};

export default TransactionSidebarRight;
