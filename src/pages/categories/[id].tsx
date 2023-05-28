import * as React from "react";
import EditCategory from "../../components/template/categories/editCategory";

const CategoryEditPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <EditCategory id={params.id} />
    </>
  );
};

export default CategoryEditPage;
