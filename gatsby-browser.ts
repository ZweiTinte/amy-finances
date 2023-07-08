import "./src/styles/main.scss";
import "./src/styles/buttons.scss";
import "./src/styles/forms.scss";
import "./src/styles/dropdowns.scss";
import "./src/styles/headlines.scss";
import "./src/styles/accounts.scss";
import "./src/styles/categories.scss";
import "./src/styles/transactions.scss";
import "./src/styles/orders.scss";
import "./src/styles/stocks.scss";
import "./src/styles/timetable.scss";
import "./src/styles/links.scss";
import "./src/styles/checkbox.scss";
import "./src/styles/dateSelection.scss";

import WrapRootElement from "./src/wrapRootElement";

Date.prototype.toDateString = function (): string {
  return this.toISOString().split("T")[0];
};

export const wrapRootElement = WrapRootElement;
