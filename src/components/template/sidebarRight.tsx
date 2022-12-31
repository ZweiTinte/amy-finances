import { navigate } from "gatsby";
import * as React from "react";
import Button from "../atoms/button";
import Headline from "../atoms/headline";

const SidebarRight = () => {
  return (
    <div className="sidebarRight">
      <Headline text={"Accounts Menu"} style="sidebarHeadline" />
      <Button
        color={"sidebarButton"}
        onClick={() => navigate("/accounts/new")}
        text={"Add New Account"}
      />
    </div>
  );
};

export default SidebarRight;
