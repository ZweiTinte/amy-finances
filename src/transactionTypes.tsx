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
  transactionType: DropdownItem;
  setTransactionType: React.Dispatch<React.SetStateAction<DropdownItem>>;
  recurringEnd: string;
  setRecurringEnd: React.Dispatch<React.SetStateAction<string>>;
  recurringGap: string;
  setRecurringGap: React.Dispatch<React.SetStateAction<string>>;
  recurringPeriod: DropdownItem;
  setRecurringPeriod: React.Dispatch<React.SetStateAction<DropdownItem>>;
}

export interface TransactionFormProps extends TransactionTemplateProps {
  submitHandler: (e: React.SyntheticEvent) => void;
  deleteSelectedTransaction?: () => void;
}

export interface EditTransactionProps extends TransactionTemplateProps {
  id: string;
}

export interface TransactionSidebarContentProps {
  transactions: Transaction[];
  selectedCategories: DropdownItem[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedTypes: DropdownItem[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedYears: DropdownItem[];
  setSelectedYears: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedMonths: DropdownItem[];
  setSelectedMonths: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  selectedAccounts: DropdownItem[];
  setSelectedAccounts: React.Dispatch<React.SetStateAction<DropdownItem[]>>;
  accounts: DropdownItem[];
  hideFutureTransactions: boolean;
  setHideFutureTransactions: React.Dispatch<React.SetStateAction<boolean>>;
}
