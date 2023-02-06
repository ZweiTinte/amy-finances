import * as React from "react";
import Button from "../atoms/button";

const StockFormSubmit = ({
  deleteSelectedStock,
}: {
  deleteSelectedStock?: () => void;
}) => {
  return (
    <>
      {deleteSelectedStock === undefined ? (
        <div className="formRow">
          <input type="submit" value="Add Stock" />
        </div>
      ) : (
        <div className="formRow">
          <input type="submit" value="Update Stock" />
          <Button
            onClick={deleteSelectedStock}
            text={"Delete Stock"}
            color="redButton"
          />
        </div>
      )}
    </>
  );
};

export default StockFormSubmit;
