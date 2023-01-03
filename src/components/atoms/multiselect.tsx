import * as React from "react";
import { DropdownItem } from "./dropdown";

interface MultiselectProps {
  dropDownItems: DropdownItem[];
  setDropdownItems: React.Dispatch<React.SetStateAction<Account[]>>;
  dropDownData: DropdownItem[];
  accounts: Account[];
}

const Multiselect = ({
  dropDownItems,
  setDropdownItems,
  dropDownData,
  accounts,
}: MultiselectProps) => {
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
    <div
      className={`colLayout dropdownBorder ${open ? "priority" : ""}`}
      ref={ref}
    >
      <div className="dropdown" onClick={() => setOpen(!open)}>
        Selected: {dropDownItems.length}
      </div>
      {open &&
        dropDownData.map((item) => {
          return (
            <div
              className={
                dropDownItems.map((el) => el.value).includes(item.value)
                  ? "selectedItem"
                  : "dropdown"
              }
              key={item.id}
              onClick={() => {
                let newDropdownItems = accounts.filter((account) =>
                  dropDownItems.map((el) => el.value).includes(account.name)
                );
                if (dropDownItems.map((el) => el.value).includes(item.value)) {
                  newDropdownItems = newDropdownItems.filter(function (i) {
                    return i.name !== item.value;
                  });
                } else {
                  newDropdownItems = newDropdownItems.concat(
                    accounts.filter(function (i) {
                      return i.name === item.value;
                    })
                  );
                }
                setDropdownItems(newDropdownItems);
              }}
            >
              {item.value}
            </div>
          );
        })}
    </div>
  );
};

export default Multiselect;
