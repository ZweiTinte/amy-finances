import * as React from "react";

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
}

const Dropdown = ({
  dropDownItem,
  setDropdownItem,
  dropDownData,
  type,
}: DropdownProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return (
    <>
      <div
        className={`colLayout dropdownBorder ${open ? "priority" : ""}`}
        ref={ref}
      >
        <div className="dropdown" onClick={() => setOpen(!open)}>
          {dropDownItem.value}
        </div>
        {open &&
          dropDownData.map((item) => {
            return (
              <div
                className="dropdown"
                key={item.id}
                onClick={() => {
                  setDropdownItem(
                    dropDownData.filter(function (i) {
                      return i.id === item.id;
                    })[0]
                  );
                  setOpen(false);
                }}
              >
                {type === DropdownTypes.Value ? item.value : item.id}
              </div>
            );
          })}
      </div>
      <div className={`${open ? "dropdownSpacer" : ""}`}></div>
    </>
  );
};

export default Dropdown;
