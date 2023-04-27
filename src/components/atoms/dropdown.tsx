import * as React from "react";
import { DropdownProps, DropdownTypes } from "../../dropdownTypes";

const Dropdown = ({
  dropDownItem,
  setDropdownItem,
  dropDownData,
  type,
  verticalForm = true,
}: DropdownProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const priorityClass = verticalForm ? "priority" : "horizontalPriority";

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
        className={`colLayout dropdownBorder ${open ? priorityClass : ""}`}
        ref={ref}
      >
        <div
          className={`${verticalForm ? "dropdown" : "horizontalDropdown"}`}
          onClick={() => setOpen(!open)}
        >
          {dropDownItem.value}
        </div>
        <div className="dropdownContent">
          {open &&
            dropDownData.map((item) => {
              return (
                <div
                  className={`${
                    verticalForm ? "dropdown" : "horizontalDropdown"
                  }`}
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
      </div>
      {verticalForm && (
        <div className={`${open ? "dropdownSpacer" : ""}`}></div>
      )}
    </>
  );
};

export default Dropdown;
