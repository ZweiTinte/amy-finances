import * as React from "react";
import EditStock from "../../components/template/stocks/editStock";

const StockEditPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <EditStock id={params.id} />
    </>
  );
};

export default StockEditPage;
