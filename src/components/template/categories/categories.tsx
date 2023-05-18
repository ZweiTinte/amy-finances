import * as React from "react";
import CategoryItem from "../../level1/categoryItem";
import Headline from "../../atoms/headline";
import LinkButton from "../../atoms/link";
import { PlusIcon } from "@heroicons/react/24/solid";

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <>
      {categories && (
        <div className="gameLayout">
          <div className="categoriesCard">
            <div className="formRowDefault">
              <Headline text="Categories Overview" style="categoriesHeadline" />
              <LinkButton to="/categories/new">
                <PlusIcon className="heroIcon" />
              </LinkButton>
            </div>
            <div className="categoryProps">
              <span className="categoryId">ID</span>
              <span className="categoryName">Name</span>
              <span className="categoryType">Type</span>
            </div>
            {categories.map((item, i) => {
              return (
                <div
                  className={
                    "categoryInfos" +
                    (i !== categories.length - 1 ? " dottedBorder" : "")
                  }
                  key={item.id}
                >
                  <CategoryItem category={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
