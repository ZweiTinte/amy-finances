import * as React from "react";
import NewDividend from "./newDividend";
import EditDividendFetching from "./editDividendFetching";

const DividendForms = ({
  stocks,
  accounts,
  id,
}: {
  stocks?: Stock[];
  accounts?: Account[];
  id?: string;
}) => {
  return (
    <>
      {accounts && stocks && (
        <>
          {id ? (
            <EditDividendFetching
              accounts={accounts.map((account) => {
                return { id: account.id, value: account.name };
              })}
              stocks={stocks}
              id={id}
            />
          ) : (
            <NewDividend
              accounts={accounts.map((account) => {
                return { id: account.id, value: account.name };
              })}
              stocks={stocks}
            />
          )}
        </>
      )}
    </>
  );
};

export default DividendForms;
