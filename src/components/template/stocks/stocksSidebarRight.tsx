import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import Headline from "../../atoms/headline";
import Button from "../../atoms/button";
import Multiselect from "../../atoms/multiselect";
import EmptyAllButtonGroup from "../../level1/emptyAllButtonGroup";
import Checkbox from "../../atoms/checkbox";

const StocksSidebarRight = ({
  stocks,
  setFilteredStocks,
}: {
  stocks: Stock[];
  setFilteredStocks: React.Dispatch<React.SetStateAction<Stock[]>>;
}) => {
  const stocksData: DropdownItem[] = stocks.map((stock) => {
    return { id: stock.id, value: stock.name };
  });
  const [selectedStocks, setSelectedStocks] =
    React.useState<DropdownItem[]>(stocksData);
  const [hideEmptyStocks, setHideEmptyStocks] = React.useState<boolean>(false);

  React.useEffect(() => {
    const filteredStocks: number[] = selectedStocks.map((stock) => {
      return stock.id;
    });
    const newStocks = stocks.filter((stock) => {
      return (
        filteredStocks.includes(stock.id) &&
        (hideEmptyStocks ? stock.amount !== 0 : true)
      );
    });
    setFilteredStocks(newStocks);
  }, [selectedStocks, hideEmptyStocks]);

  return (
    <div className="sidebarRightData">
      <Headline text={"STOCK FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedStocks(stocksData);
          setHideEmptyStocks(false);
        }}
        text={"Reset Filters"}
      />
      <Headline text={"Filter Stocks"} style="sidebarSubHeadline" />
      <Multiselect
        dropDownItems={selectedStocks}
        setDropdownItems={setSelectedStocks}
        dropDownData={stocksData}
      />
      <EmptyAllButtonGroup
        onEmptyClick={() => setSelectedStocks([])}
        onAllClick={() => setSelectedStocks(stocksData)}
      />
      <Checkbox
        label={"Hide Empty Stocks"}
        onClick={() => setHideEmptyStocks(!hideEmptyStocks)}
        checked={hideEmptyStocks}
      />
    </div>
  );
};

export default StocksSidebarRight;
