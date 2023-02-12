import * as React from "react";
import Button from "../atoms/button";

const EditFormSubmit = ({
  deleteSelectedItem,
  itemName,
}: {
  deleteSelectedItem?: () => void;
  itemName: string;
}) => {
  const [deleteConfirm, setDeleteConfirm] = React.useState<boolean>(false);

  return (
    <>
      {deleteSelectedItem === undefined ? (
        <div className="formRow">
          <input type="submit" value={`Add ${itemName}`} />
        </div>
      ) : (
        <>
          <div className="formRow">
            <input type="submit" value={`Update ${itemName}`} />
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
