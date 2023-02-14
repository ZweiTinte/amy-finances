import * as React from "react";
import TransactionSidebarRight from "./transactionSidebarRight";
import Transactions from "./transactions";

const TransactionsOverview = ({
  accounts,
  transactions,
}: {
  accounts?: Account[];
  transactions?: Transaction[];
}) => {
  const [filteredTransactions, setFilteredTransactions] = React.useState<
    Transaction[]
  >(transactions || []);

  return (
    <>
      {transactions && accounts && (
        <>
          <Transactions
            transactions={
              transactions.length > 1
                ? filteredTransactions.sort((a, b) => {
                    return Date.parse(a.date) - Date.parse(b.date);
                  })
                : transactions
            }
            accounts={accounts}
          />
          <TransactionSidebarRight
            transactions={transactions}
            accounts={accounts.map((account) => {
              return { id: account.id, value: account.name };
            })}
            setFilteredTransactions={setFilteredTransactions}
          />
        </>
      )}
    </>
  );
};

export default TransactionsOverview;
