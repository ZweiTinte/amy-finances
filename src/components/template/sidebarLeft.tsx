import { navigate } from "gatsby";
import * as React from "react";
import Button from "../atoms/button";
import Headline from "../atoms/headline";

const SidebarLeft = () => {
  return (
    <div className="sidebarLeft">
      <Headline text={"Menu"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton"}
        onClick={() => navigate("/accounts")}
        text={"Accounts"}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => navigate("/transactions")}
        text={"Transactions"}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => navigate("/stocks")}
        text={"Stocks"}
      />
      <Button
        color={"sidebarButton spaceUp"}
        onClick={() => navigate("/orders")}
        text={"Orders"}
      />
    </div>
  );
};

export default SidebarLeft;
