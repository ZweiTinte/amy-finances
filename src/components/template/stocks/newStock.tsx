import * as React from "react";
import { navigate } from "gatsby";
import { postStock } from "../../../api/stocksApi";
import Headline from "../../atoms/headline";
import StockForm from "../../level2/stockForm";

const NewStock = () => {
  const [isin, setIsin] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [link, setLink] = React.useState<string>("");
  const [watchlisted, setWatchlisted] = React.useState<boolean>(false);

  function resolvePost(): void {
    navigate("/stocks");
  }

  function addNewStock(): void {
    postStock(resolvePost, isin, name, parseFloat(price), link, watchlisted);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewStock();
  };

  return (
    <div className="gameLayout">
      <div className="overviewCard">
        <Headline text="Add a new stock" style="cardHeadline" />
        <StockForm
          submitHandler={submitHandler}
          price={price}
          setPrice={setPrice}
          isin={isin}
          setIsin={setIsin}
          name={name}
          setName={setName}
          link={link}
          setLink={setLink}
          watchlisted={watchlisted}
          setWatchlisted={setWatchlisted}
        />
      </div>
    </div>
  );
};

export default NewStock;
