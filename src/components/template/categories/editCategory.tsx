import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import ErrorInfo from "../../level1/errorInfo";
import {
  deleteCategory,
  fetchCategory,
  updateCategory,
} from "../../../api/categoriesApi";
import CategoryForm from "../../level2/categoryForm";
import { DropdownItem } from "../../../dropdownTypes";
import { getCategoryDDItem } from "../../../helpers/helpers";

const EditCategory = ({ id }: { id: string }) => {
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [type, setType] = React.useState<DropdownItem>(getCategoryDDItem(-1));

  const deleteSelectedCategory = () => {
    deleteCategory(resolveUpdate, id);
  };

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveUpdate(): void {
    navigate("/categories");
  }

  function updateCategoryItem(): void {
    updateCategory(resolveUpdate, id, name, type.id);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateCategoryItem();
  };

  function resolveFetching(data: Category): void {
    setName(data.name);
    setType(getCategoryDDItem(data.type));
    setTemplateReady(true);
  }

  function loadCategory(): void {
    setTemplateReady(false);
    setError(false);
    setErrorMessage("");
    fetchCategory(resolveFetching, handleError, id);
  }

  React.useEffect(() => {
    loadCategory();
  }, []);

  return (
    <>
      {templateReady && (
        <div className="gameLayout">
          <div className="overviewCard">
            <Headline text="Edit category" style="cardHeadline" />
            <CategoryForm
              submitHandler={submitHandler}
              name={name}
              setName={setName}
              deleteSelectedCategory={deleteSelectedCategory}
              type={type}
              setType={setType}
            />
          </div>
        </div>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadCategory} />}
    </>
  );
};

export default EditCategory;
