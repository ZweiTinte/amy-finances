import { DropdownItem } from "./components/atoms/dropdown";

export async function fetchStocks(
  resolveFetching: (data: Stock[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks`)
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

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
