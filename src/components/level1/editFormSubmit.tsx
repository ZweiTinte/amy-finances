import * as React from "react";
import Button from "../atoms/button";

const EditFormSubmit = ({
  deleteSelectedItem,
  submitHandler,
  itemName,
}: {
  deleteSelectedItem?: () => void;
  submitHandler?: (e: React.SyntheticEvent) => void;
  itemName: string;
}) => {
  const [deleteConfirm, setDeleteConfirm] = React.useState<boolean>(false);

  return (
    <>
      {deleteSelectedItem === undefined ? (
        <div className="formRow">
          <input
            onClick={submitHandler}
            value={`Add ${itemName}`}
            type="button"
          />
        </div>
      ) : (
        <>
          <div className="formRow">
            <input
              type="button"
              value={`Update ${itemName}`}
              onClick={submitHandler}
            />
            <Button
              onClick={(e: React.SyntheticEvent) => {
                e.preventDefault();
                setDeleteConfirm(true);
              }}
              text={`Delete ${itemName}`}
              color="redButton"
            />
          </div>
          {deleteConfirm && (
            <div className="deleteConfirmRow">
              <label className="formLabel">Are you sure?</label>
              <Button
                onClick={deleteSelectedItem}
                text={"Yes!"}
                color="redButton"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EditFormSubmit;
