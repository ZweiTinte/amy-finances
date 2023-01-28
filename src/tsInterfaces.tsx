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
