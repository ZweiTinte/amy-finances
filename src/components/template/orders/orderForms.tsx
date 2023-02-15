import * as React from "react";
import NewOrder from "./newOrder";
import EditOrderFetching from "./editOrderFetching";

const OrderForms = ({
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
            <EditOrderFetching
              accounts={accounts.map((account) => {
                return { id: account.id, value: account.name };
              })}
              stocks={stocks}
              id={id}
            />
          ) : (
            <NewOrder
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

export default OrderForms;
