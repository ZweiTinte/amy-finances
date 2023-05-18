import * as React from "react";
import Categories from "./categories";
import ErrorInfo from "../../level1/errorInfo";

const CategoriesOverview = ({
  categories,
}: {
  transactions?: Transaction[];
  orders?: Order[];
  stocks?: Stock[];
  categories?: Category[];
  dividends?: Dividend[];
}) => {
  const [categoriesReady, setCategoriesReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [filteredCategories, setFilteredCategories] = React.useState<
    Category[]
  >([]);

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    if (categories) {
      setFilteredCategories(categories);
      setCategoriesReady(true);
    } else {
      setError(true);
      setErrorMessage("Some data wasn't passed to this component!");
    }
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {categoriesReady && (
        <>
          <Categories categories={filteredCategories} />
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default CategoriesOverview;
