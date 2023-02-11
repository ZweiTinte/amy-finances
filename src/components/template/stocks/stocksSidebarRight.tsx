import * as React from "react";
import { DropdownItem } from "../../atoms/dropdown";
import Headline from "../../atoms/headline";
import Button from "../../atoms/button";
import Multiselect from "../../atoms/multiselect";
import EmptyAllButtonGroup from "../../level1/emptyAllButtonGroup";

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

  React.useEffect(() => {
    const filteredStocks: number[] = selectedStocks.map((stock) => {
      return stock.id;
    });
    const newStocks = stocks.filter((stock) => {
      return filteredStocks.includes(stock.id);
    });
    setFilteredStocks(newStocks);
  }, [selectedStocks]);

  return (
    <div className="sidebarRight">
      <Headline text={"STOCK FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedStocks(stocksData);
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
    </div>
  );
};

export default StocksSidebarRight;
