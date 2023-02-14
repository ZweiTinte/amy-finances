import * as React from "react";
import Orders from "./orders";
import OrderSidebarRight from "./orderSidebarRight";

const OrdersOverview = ({
  accounts,
  stocks,
  orders,
}: {
  accounts?: Account[];
  stocks?: Stock[];
  orders?: Order[];
}) => {
  const [filteredOrders, setFilteredOrders] = React.useState<Order[]>(
    orders || []
  );

  return (
    <>
      {orders && accounts && stocks && (
        <>
          <Orders
            orders={
              orders.length > 1
                ? filteredOrders.sort((a, b) => {
                    return Date.parse(a.date) - Date.parse(b.date);
                  })
                : orders
            }
            accounts={accounts}
            stocks={stocks}
          />
          <OrderSidebarRight
            orders={orders}
            stocks={stocks.map((stock) => {
              return { id: stock.id, value: stock.name };
            })}
            accounts={accounts.map((account) => {
              return { id: account.id, value: account.name };
            })}
            setFilteredOrders={setFilteredOrders}
          />
        </>
      )}
    </>
  );
};

export default OrdersOverview;
