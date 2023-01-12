import { DropdownItem } from "./components/atoms/dropdown";

interface TransactionTemplateProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  category: DropdownItem;
  setCategory: React.Dispatch<React.SetStateAction<DropdownItem>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  from: DropdownItem;
  setFrom: React.Dispatch<React.SetStateAction<DropdownItem>>;
  accounts: DropdownItem[];
  to: DropdownItem;
  setTo: React.Dispatch<React.SetStateAction<DropdownItem>>;
}

export interface TransactionFormProps extends TransactionTemplateProps {
  submitHandler: (e: React.SyntheticEvent) => void;
  deleteSelectedTransaction?: () => void;
}

export interface EditTransactionProps extends TransactionTemplateProps {
  id: string;
}
