interface TextProps {
  text: string;
}

interface ButtonProps extends TextProps {
  color?: string;
  onClick: (params: any) => void;
}

interface Account {
  id: number;
  iban: string;
  name: string;
  balance: number;
  accountType: string;
}

interface Transaction {
  id: number;
  name: string;
  amount: number;
  category: string;
  from: number;
  to: number;
  date: string;
}

interface Order {
  id: number;
  name: string;
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
}
