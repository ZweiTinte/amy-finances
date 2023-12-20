import { DropdownItem } from "../dropdownTypes";
import { StockItem } from "../stockTypes";
import { euroFormat } from "./helpers";

export const stockItemFields: string[] = [
  "Id",
  "Isin",
  "Name",
  "Amount",
  "Price",
  "Sum",
  "Link",
];

export function getStocks(stockId: number, stocks: Stock[]): Stock[] {
  if (stockId === 0) {
    return [];
  } else {
    return stocks.filter((stock) => {
      return stock.id === stockId;
    });
  }
}

export function getStockDDItems(
  stockId: number,
  stocks: Stock[],
  filter: boolean = true
): DropdownItem[] {
  const stocksFound = filter ? getStocks(stockId, stocks) : stocks;
  if (stocksFound.length > 0) {
    return stocksFound.map((stock) => {
      return { id: stock.id, value: stock.name };
    });
  }
  return [];
}

export function getStockItems(
  stocks: Stock[],
  sort: string,
  sortAsc: boolean
): StockItem[] {
  return stocks
    .map((stock) => {
      return {
        isin: stock.isin,
        name: stock.name,
        amount: stock.amount,
        price: stock.price,
        sum: stock.price * stock.amount,
        link: stock.link ?? "",
        id: stock.id.toString(),
      };
    })
    .sort((a: { [key: string]: any }, b: { [key: string]: any }) => {
      if (["price", "sum", "amount"].includes(sort)) {
        if (sortAsc) {
          return parseFloat(a[sort]) - parseFloat(b[sort]);
        }
        return parseFloat(b[sort]) - parseFloat(a[sort]);
      }
      if (typeof b[sort] === "string") {
        if (sortAsc) {
          return a[sort].localeCompare(b[sort]);
        }
        return b[sort].localeCompare(a[sort]);
      }
      return 1;
    })
    .map((stock) => {
      return {
        isin: stock.isin,
        name: stock.name,
        amount: stock.amount.toString(),
        price: euroFormat.format(stock.price),
        sum: euroFormat.format(stock.price * stock.amount),
        link: stock.link ?? "",
        id: stock.id.toString(),
      };
    });
}
