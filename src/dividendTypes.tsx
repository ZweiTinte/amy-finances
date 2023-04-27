import { DropdownItem } from "./dropdownTypes";

interface DividendTemplateProps {
  payDate: string;
  setPayDate: React.Dispatch<React.SetStateAction<string>>;
  exDate: string;
  setExDate: React.Dispatch<React.SetStateAction<string>>;
  amountBeforeTax: string;
  setAmountBeforeTax: React.Dispatch<React.SetStateAction<string>>;
  taxAmount: string;
  setTaxAmount: React.Dispatch<React.SetStateAction<string>>;
  accounts: DropdownItem[];
  stocks: DropdownItem[];
  to: DropdownItem;
  setTo: React.Dispatch<React.SetStateAction<DropdownItem>>;
  stock: DropdownItem;
  setStock: React.Dispatch<React.SetStateAction<DropdownItem>>;
}

export interface DividendFormProps extends DividendTemplateProps {
  submitHandler: (e: React.SyntheticEvent) => void;
  deleteSelectedDividend?: () => void;
}

export interface EditDividendProps extends DividendTemplateProps {
  id: string;
}
