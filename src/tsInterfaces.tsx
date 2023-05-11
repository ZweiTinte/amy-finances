interface TextProps {
  text?: string;
}

interface Account {
  id: number;
  iban: string;
  name: string;
  balance: number;
  accountType: string;
}

interface Transaction {
  id?: number;
  transactionType: string;
  name: string;
  amount: number;
  category: string;
  from: number;
  to: number;
  date: string;
  recurringEnd?: string;
  recurringPeriod?: string;
  recurringGap?: number;
}

interface Order {
  id?: number;
  amount: number;
  from: number;
  to: number;
  date: string;
  price: number;
  sum: number;
  cost: number;
  stock: number;
  orderType: string;
}

interface Stock {
  id: number;
  isin: string;
  name: string;
  amount: number;
  price: number;
  link?: string;
  watchlisted?: boolean;
}

interface Dividend {
  id: number;
  payDate: string;
  exDate: string;
  amountBeforeTax: number;
  taxAmount: number;
  stock: number;
  toAccount: number;
}
