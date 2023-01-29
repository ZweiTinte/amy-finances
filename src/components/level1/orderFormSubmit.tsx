import * as React from "react";
import Button from "../atoms/button";

const OrderFormSubmit = ({
  deleteSelectedOrder,
}: {
  deleteSelectedOrder?: () => void;
}) => {
  return (
    <>
      {deleteSelectedOrder === undefined ? (
        <div className="formRow">
          <input type="submit" value="Add Order" />
        </div>
      ) : (
        <div className="formRow">
          <input type="submit" value="Update Order" />
          <Button
            onClick={deleteSelectedOrder}
            text={"Delete Order"}
            color="redButton"
          />
        </div>
      )}
    </>
  );
};

export default OrderFormSubmit;
