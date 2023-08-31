import * as React from "react";
import Headline from "../../atoms/headline";
import Button from "../../atoms/button";
import Checkbox from "../../atoms/checkbox";
import MultiselectFilter from "../../level2/multiselectFilter";
import { DropdownItem } from "../../../dropdownTypes";

const StocksSidebarRight = ({
  stocks,
  setFilteredStocks,
  setFiltered,
}: {
  stocks: Stock[];
  setFilteredStocks: React.Dispatch<React.SetStateAction<Stock[]>>;
  setFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const stocksData: DropdownItem[] = stocks.map((stock) => {
    return { id: stock.id, value: stock.name };
  });
  const [selectedStocks, setSelectedStocks] =
    React.useState<DropdownItem[]>(stocksData);
  const [hideEmptyStocks, setHideEmptyStocks] = React.useState<boolean>(
    localStorage.getItem("hideEmptyStocks") !== null
      ? JSON.parse(localStorage.getItem("hideEmptyStocks") as string)
      : true
  );
  const [hideNonEmptyStocks, setHideNonEmptyStocks] = React.useState<boolean>(
    localStorage.getItem("hideNonEmptyStocks") !== null
      ? JSON.parse(localStorage.getItem("hideNonEmptyStocks") as string)
      : false
  );
  const [showWatchlist, setShowWatchlist] = React.useState<boolean>(
    localStorage.getItem("showWatchlist") !== null
      ? JSON.parse(localStorage.getItem("showWatchlist") as string)
      : false
  );

  React.useEffect(() => {
    const filteredStocks: number[] = selectedStocks.map((stock) => {
      return stock.id;
    });
    const newStocks = stocks.filter((stock) => {
      return (
        filteredStocks.includes(stock.id) &&
        (hideEmptyStocks ? stock.amount !== 0 : true) &&
        (hideNonEmptyStocks ? stock.amount === 0 : true) &&
        (showWatchlist ? stock.watchlisted : true)
      );
    });
    localStorage.setItem("hideEmptyStocks", JSON.stringify(hideEmptyStocks));
    localStorage.setItem(
      "hideNonEmptyStocks",
      JSON.stringify(hideNonEmptyStocks)
    );
    localStorage.setItem("showWatchlist", JSON.stringify(showWatchlist));
    setFilteredStocks(newStocks);
    setFiltered(true);
  }, [selectedStocks, hideEmptyStocks, showWatchlist, hideNonEmptyStocks]);

  return (
    <div className="sidebarRightData">
      <Headline text={"STOCK FILTERS"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => {
          setSelectedStocks(stocksData);
          setHideEmptyStocks(false);
          setHideNonEmptyStocks(false);
          setShowWatchlist(false);
        }}
        text={"Reset Filters"}
      />
      <MultiselectFilter
        selected={selectedStocks}
        setSelected={setSelectedStocks}
        data={stocksData}
        label={"Filter Stocks"}
        style={"sidebarSubHeadline"}
      />
      <Checkbox
        label={"Hide Empty Stocks"}
        onClick={() => setHideEmptyStocks(!hideEmptyStocks)}
        checked={hideEmptyStocks}
      />
      <Checkbox
        label={"Hide Non Empty Stocks"}
        onClick={() => setHideNonEmptyStocks(!hideNonEmptyStocks)}
        checked={hideNonEmptyStocks}
      />
      <Checkbox
        label={"Show only Watchlist"}
        onClick={() => setShowWatchlist(!showWatchlist)}
        checked={showWatchlist}
      />
    </div>
  );
};

export default StocksSidebarRight;
