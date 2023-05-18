import * as React from "react";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";

interface CategoryProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryProps) => {
  let categoryType = "";
  if (category.type === -1) {
    categoryType = "Expense";
  } else if (category.type === 0) {
    categoryType = "Money Transfer";
  } else if (category.type === 1) {
    categoryType = "Income";
  }
  return (
    <>
      <span className="categoryId">{category.id}</span>
      <span className="categoryName">{category.name}</span>
      <span className="categoryType">{categoryType}</span>
      <span>
        <LinkButton to={`/categories/${category.id}`}>
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default CategoryItem;
