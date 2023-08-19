import "./src/styles/main.scss";
import "./src/styles/buttons.scss";
import "./src/styles/forms.scss";
import "./src/styles/dropdowns.scss";
import "./src/styles/headlines.scss";
import "./src/styles/overviewCards/accounts.scss";
import "./src/styles/overviewCards/categories.scss";
import "./src/styles/overviewCards/transactions.scss";
import "./src/styles/overviewCards/orders.scss";
import "./src/styles/overviewCards/stocks.scss";
import "./src/styles/timetable.scss";
import "./src/styles/links.scss";
import "./src/styles/checkbox.scss";
import "./src/styles/dateSelection.scss";
import "./src/styles/overviewCards/overviews.scss";
import "./src/styles/overviewCards/dividends.scss";

import WrapRootElement from "./src/wrapRootElement";

Date.prototype.toDateString = function (): string {
  return this.toISOString().split("T")[0];
};

export const wrapRootElement = WrapRootElement;
