import * as React from "react";
import { inputKeyDownAction, itemAction } from "../../helpers/dropdownHelpers";
import { DropdownItem, DropdownSearchProps } from "../../dropdownTypes";

const DropdownSearch = ({
  dropDownItem,
  setDropdownItem,
  dropDownData,
  strictSearch = false,
  verticalForm = true,
}: DropdownSearchProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const [filteredData, setFilteredData] =
    React.useState<DropdownItem[]>(dropDownData);
  const priorityClass = verticalForm ? "priority" : "horizontalPriority";
  const dropdownClass = verticalForm ? "dropdown" : "horizontalDropdown";

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
      setOpen(false);
    }
  };

  function setData(e: React.ChangeEvent<HTMLInputElement>) {
    setFilteredData(
      dropDownData.filter(function (i) {
        if (strictSearch) {
          return i.value.includes(e.target.value);
        } else {
          return i.value.toLowerCase().includes(e.target.value.toLowerCase());
        }
      })
    );
    setDropdownItem(e.target.value);
  }

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return (
    <div
      className={`colLayout dropdownBorder ${open ? priorityClass : ""}`}
      ref={ref}
    >
      {open ? (
        <input
          type="text"
          className={`${
            filteredData.length > 0 ? "dropdownInput" : "dropdownEmpty"
          }`}
          onChange={(e) => setData(e)}
          onKeyDown={(e) => inputKeyDownAction(e)}
          autoFocus
        />
      ) : (
        <div
          className={dropdownClass}
          onClick={() => {
            setOpen(true);
            setFilteredData(dropDownData);
          }}
        >
          {dropDownItem}
        </div>
      )}
      <div className="dropdownContentFix">
        {open &&
          filteredData.map((item) => {
            return (
              <div
                tabIndex={0}
                className={dropdownClass}
                key={item.id}
                onClick={(e) => {
                  setDropdownItem(item.value);
                  setOpen(false);
                }}
                onKeyDown={(e) => itemAction(e)}
              >
                {item.value}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DropdownSearch;
