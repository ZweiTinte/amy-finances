export interface DropdownSearchProps {
  strictSearch?: boolean;
  dropDownItem: string;
  setDropdownItem: React.Dispatch<React.SetStateAction<string>>;
  dropDownData: DropdownItem[];
  type: DropdownTypes;
  verticalForm?: boolean;
}

export type DropdownItem = { id: number; value: string };

export enum DropdownTypes {
  Id,
  Value,
}
export interface DropdownProps {
  dropDownItem: DropdownItem;
  setDropdownItem: React.Dispatch<React.SetStateAction<DropdownItem>>;
  dropDownData: DropdownItem[];
  type: DropdownTypes;
  verticalForm?: boolean;
}
