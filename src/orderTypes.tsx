import { DropdownItem } from "./dropdownTypes";

interface OrderTemplateProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  orderType: DropdownItem;
  setOrderType: React.Dispatch<React.SetStateAction<DropdownItem>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  cost: string;
  setCost: React.Dispatch<React.SetStateAction<string>>;
  from: DropdownItem;
  setFrom: React.Dispatch<React.SetStateAction<DropdownItem>>;
  accounts: DropdownItem[];
  stocks: DropdownItem[];
  to: DropdownItem;
  setTo: React.Dispatch<React.SetStateAction<DropdownItem>>;
  stock: DropdownItem;
  setStock: React.Dispatch<React.SetStateAction<DropdownItem>>;
}

export interface OrderFormProps extends OrderTemplateProps {
  submitHandler: (e: React.SyntheticEvent) => void;
  deleteSelectedOrder?: () => void;
}

export interface EditOrderProps extends OrderTemplateProps {
  id: string;
}
