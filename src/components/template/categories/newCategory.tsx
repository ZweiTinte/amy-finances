import * as React from "react";
import { navigate } from "gatsby";
import Headline from "../../atoms/headline";
import { postCategory } from "../../../api/categoriesApi";
import CategoryForm from "../../level2/categoryForm";
import { DropdownItem } from "../../../dropdownTypes";
import { getCategoryDDItem } from "../../../helpers/helpers";

const NewCategory = () => {
  const [type, setType] = React.useState<DropdownItem>(getCategoryDDItem(-1));
  const [name, setName] = React.useState<string>("");

  function resolvePost(): void {
    navigate("/categories");
  }

  function addNewCategory(): void {
    postCategory(resolvePost, name, type.id);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewCategory();
  };

  return (
    <div className="gameLayout">
      <div className="categoriesCard">
        <Headline text="Add a new category" style="categoriesHeadline" />
        <CategoryForm
          submitHandler={submitHandler}
          name={name}
          setName={setName}
          type={type}
          setType={setType}
        />
      </div>
    </div>
  );
};

export default NewCategory;
