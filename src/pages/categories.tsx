import * as React from "react";
import CategoriesFetching from "../components/template/categoriesFetching";
import CategoriesOverview from "../components/template/categories/categoriesOverview";

const CategoriesPage = () => {
  return (
    <CategoriesFetching>
      <CategoriesOverview />
    </CategoriesFetching>
  );
};

export default CategoriesPage;
