import { DropdownItem } from "./dropdownTypes";

interface CategoryTemplateProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  type: DropdownItem;
  setType: React.Dispatch<React.SetStateAction<DropdownItem>>;
}

export interface CategoryFormProps extends CategoryTemplateProps {
  submitHandler: (e: React.SyntheticEvent) => void;
  deleteSelectedCategory?: () => void;
}

export interface EditCategoryProps extends CategoryTemplateProps {
  id: string;
}
