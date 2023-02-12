import * as React from "react";
import TextInput from "../../atoms/textInput";
import { navigate } from "gatsby";
import { postStock } from "../../../api/stocksApi";
import StockFormSubmit from "../../level1/stockFormSubmit";
import Headline from "../../atoms/headline";
import NumberInput from "../../atoms/numberInput";

const NewStock = () => {
  const [isin, setIsin] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");

  function resolvePost(): void {
    navigate("/stocks");
  }

  function addNewStock(): void {
    postStock(resolvePost, isin, name, parseFloat(price));
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addNewStock();
  };

  return (
    <div className="gameLayout">
      <div className="stocksCard">
        <Headline text="Add a new stock" style="transactionsHeadline" />
        <form onSubmit={submitHandler}>
          <div className="formRow">
            <label className="formLabel">ISIN:</label>
            <TextInput value={isin} setValue={setIsin} />
          </div>
          <div className="formRow">
            <label className="formLabel">Name:</label>
            <TextInput value={name} setValue={setName} />
          </div>
          <div className="formRow">
            <label className="formLabel">Price:</label>
            <NumberInput value={price} setValue={setPrice} />
          </div>
          <StockFormSubmit />
        </form>
      </div>
    </div>
  );
};

export default NewStock;
