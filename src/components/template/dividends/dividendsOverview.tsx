import * as React from "react";
import Dividends from "./dividends";
import DividendSidebarRight from "./dividendSidebarRight";

const DividendsOverview = ({
  accounts,
  stocks,
  dividends,
}: {
  accounts?: Account[];
  stocks?: Stock[];
  dividends?: Dividend[];
}) => {
  const [filteredDividends, setFilteredDividends] = React.useState<Dividend[]>(
    dividends || []
  );

  React.useEffect(() => {
    if (dividends) {
      setFilteredDividends(dividends);
    }
  }, [dividends]);

  return (
    <>
      {dividends && accounts && stocks && (
        <>
          <Dividends
            dividends={
              dividends.length > 1
                ? filteredDividends.sort((a, b) => {
                    return Date.parse(a.payDate) - Date.parse(b.payDate);
                  })
                : dividends
            }
            accounts={accounts}
            stocks={stocks}
          />
          <DividendSidebarRight
            dividends={dividends}
            stocks={stocks.map((stock) => {
              return { id: stock.id, value: stock.name };
            })}
            accounts={accounts.map((account) => {
              return { id: account.id, value: account.name };
            })}
            setFilteredDividends={setFilteredDividends}
          />
        </>
      )}
    </>
  );
};

export default DividendsOverview;
