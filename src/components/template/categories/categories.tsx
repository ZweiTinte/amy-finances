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
          <div className="overviewCard">
            <div className="formRowDefault">
              <Headline text="Categories Overview" style="cardHeadline" />
              <LinkButton to="/categories/new" title="add new category">
                <PlusIcon className="heroIcon" />
              </LinkButton>
            </div>
            <div className="overviewHead">
              <span className="overviewId">ID</span>
              <span className="overviewCategory">Name</span>
              <span className="categoryType">Type</span>
            </div>
            {categories.map((item, i) => {
              return (
                <div
                  className={
                    "overviewRow" +
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
