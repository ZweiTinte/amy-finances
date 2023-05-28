import * as React from "react";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";
import { getCategoryType } from "../../helpers/helpers";

interface CategoryProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryProps) => {
  let categoryType = getCategoryType(category.type);

  return (
    <>
      <span className="categoryId">{category.id}</span>
      <span className="categoryName">{category.name}</span>
      <span className="categoryType">{categoryType}</span>
      <span>
        <LinkButton to={`/categories/${category.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default CategoryItem;
