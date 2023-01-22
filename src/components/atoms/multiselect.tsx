import * as React from "react";
import { DropdownItem } from "./dropdown";

interface MultiselectProps {
  dropDownItems: DropdownItem[];
  setDropdownItems: React.Dispatch<React.SetStateAction<any[]>>;
  dropDownData: DropdownItem[];
  items: any[];
}

const Multiselect = ({
  dropDownItems,
  setDropdownItems,
  dropDownData,
  items,
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
    <>
      <div
        className={`colLayout dropdownBorder ${open ? "priority" : ""}`}
        ref={ref}
      >
        <div className="dropdown" onClick={() => setOpen(!open)}>
          Selected: {dropDownItems.length}
        </div>
        <div className="dropdownContent">
          {open &&
            dropDownData.map((item) => {
              return (
                <div
                  className={
                    dropDownItems.map((el) => el.id).includes(item.id)
                      ? "selectedItem"
                      : "dropdown"
                  }
                  key={item.id}
                  onClick={() => {
                    let newDropdownItems = items.filter((i) =>
                      dropDownItems.map((el) => el.id).includes(i.id)
                    );
                    if (dropDownItems.map((el) => el.id).includes(item.id)) {
                      newDropdownItems = newDropdownItems.filter(function (i) {
                        return i.id !== item.id;
                      });
                    } else {
                      newDropdownItems = newDropdownItems.concat(
                        items.filter(function (i) {
                          return i.id === item.id;
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
      </div>
      <div className={`${open ? "dropdownSpacer" : ""}`}></div>
    </>
  );
};

export default Multiselect;
