import { navigate } from "gatsby";
import * as React from "react";
import Button from "../atoms/button";
import Headline from "../atoms/headline";
import LinkButton from "../atoms/link";

const SidebarLeft = () => {
  return (
    <div className="sidebarLeft">
      <Headline text={"Menu"} style="sidebarHeadline" />
      <LinkButton to="/accounts" text={"Accounts"} classes="sidebarLink" />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/transactions"}
        text={"Transactions"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/stocks"}
        text={"Stocks"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/orders"}
        text={"Orders"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/dividends"}
        text={"Dividends"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/categories"}
        text={"Categories"}
      />
    </div>
  );
};

export default SidebarLeft;
