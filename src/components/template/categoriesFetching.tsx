import * as React from "react";
import ErrorInfo from "../level1/errorInfo";
import { fetchCategories } from "../../api/categoriesApi";

const CategoriesFetching = ({
  children,
  transactions,
  orders,
  stocks,
}: {
  children: JSX.Element;
  transactions?: Transaction[];
  orders?: Order[];
  stocks?: Stock[];
}) => {
  const [categoriesReady, setCategoriesReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [categories, setCategories] = React.useState<Category[]>([]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveCategoriesFetching(data: Category[]): void {
    setCategories(data);
    setCategoriesReady(true);
  }

  function loadCategories(): void {
    setCategoriesReady(false);
    fetchCategories(resolveCategoriesFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadCategories();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {categoriesReady && (
        <>
          {React.cloneElement(children, {
            transactions: transactions,
            orders: orders,
            stocks: stocks,
            categories: categories,
          })}
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default CategoriesFetching;
