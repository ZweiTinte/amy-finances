import { DropdownItem } from "./components/atoms/dropdown";

interface AccountTemplateProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  accountType: DropdownItem;
  setAccountType: React.Dispatch<React.SetStateAction<DropdownItem>>;
}

export interface AccountFormProps extends AccountTemplateProps {
  submitHandler: (e: React.SyntheticEvent) => void;
  deleteSelectedAccount?: () => void;
}

export interface EditAccountProps extends AccountTemplateProps {
  id: string;
}
