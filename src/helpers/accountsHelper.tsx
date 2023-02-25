import { DropdownItem } from "../components/atoms/dropdown";

export const accountTypes = [
  { id: 0, value: "Cash" },
  { id: 1, value: "Stock" },
  { id: 2, value: "Clearing" },
];

export const emptyAccountDDItem: DropdownItem = { id: 0, value: "Empty" };

export function getAccountName(accountId: number, accounts: Account[]): string {
  if (accountId === 0) {
    return "";
  } else {
    return accounts.filter((account) => {
      return account.id === accountId;
    })[0].name;
  }
}

export function getAccountDDItem(accountId: number, accounts: DropdownItem[]) {
  return accounts.filter((a) => {
    return a.id === accountId;
  })[0];
}

export function calculateAccountBalance(
  data: Account[],
  stocks: Stock[],
  orders: Order[],
  transactions: Transaction[],
  dividends: Dividend[]
): Account[] {
  return data.map((account) => {
    let accountStocks = stocks.map((stock) => {
      return { id: stock.id, amount: 0 };
    });
    transactions.forEach((trans) => {
      if (
        new Date(trans.date) < new Date() &&
        trans.transactionType !== "Expected"
      ) {
        if (trans.from === account.id) {
          account.balance -= trans.amount;
        } else if (trans.to === account.id) {
          account.balance += trans.amount;
        }
      }
    });
    dividends.forEach((dividend) => {
      if (dividend.toAccount === account.id) {
        account.balance += dividend.amountBeforeTax - dividend.taxAmount;
      }
    });
    orders.forEach((order) => {
      if (order.from === account.id && account.accountType === "Clearing") {
        account.balance -= order.sum;
      } else if (order.from === account.id && account.accountType === "Stock") {
        const stock = stocks.filter((stock) => {
          return stock.id === order.stock;
        })[0];
        accountStocks = accountStocks.map((as) => {
          if (as.id === stock.id) {
            as.amount -= order.amount;
          }
          return as;
        });
      }
      if (order.to === account.id && account.accountType === "Clearing") {
        account.balance += order.sum;
      } else if (order.to === account.id && account.accountType === "Stock") {
        const stock = stocks.filter((stock) => {
          return stock.id === order.stock;
        })[0];
        accountStocks = accountStocks.map((as) => {
          if (as.id === stock.id) {
            as.amount += order.amount;
          }
          return as;
        });
      }
    });
    if (account.accountType === "Stock") {
      accountStocks.forEach((as) => {
        if (as.amount !== 0) {
          const stock = stocks.filter((stock) => {
            return stock.id === as.id;
          })[0];
          account.balance += stock.price * as.amount;
        }
      });
    }
    return account;
  });
}
