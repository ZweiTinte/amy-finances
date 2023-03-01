import { navigate } from "gatsby";
import * as React from "react";
import Headline from "../../atoms/headline";
import TextInput from "../../atoms/textInput";
import ErrorInfo from "../../level1/errorInfo";
import { deleteStock, fetchStock, updateStock } from "../../../api/stocksApi";
import NumberInput from "../../atoms/numberInput";
import EditFormSubmit from "../../level1/editFormSubmit";

const EditStock = ({ id }: { id: string }) => {
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [isin, setIsin] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("");

  const deleteSelectedStock = () => {
    deleteStock(resolveUpdate, id);
  };

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveUpdate(): void {
    navigate("/stocks");
  }

  function updateStockItem(): void {
    updateStock(
      resolveUpdate,
      id,
      isin,
      name,
      parseInt(amount),
      parseFloat(price)
    );
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateStockItem();
  };

  function resolveFetching(data: Stock): void {
    setName(data.name);
    setIsin(data.isin);
    setPrice(data.price.toString());
    setAmount(data.amount.toString());
    setTemplateReady(true);
  }

  function loadStock(): void {
    setTemplateReady(false);
    setError(false);
    setErrorMessage("");
    fetchStock(resolveFetching, handleError, id);
  }

  React.useEffect(() => {
    loadStock();
  }, []);

  return (
    <>
      {templateReady && (
        <div className="gameLayout">
          <div className="stocksCard">
            <Headline text="Edit stock" style="accountsHeadline" />
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
              <EditFormSubmit
                deleteSelectedItem={deleteSelectedStock}
                itemName={"Stock"}
              />
            </form>
          </div>
        </div>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadStock} />}
    </>
  );
};

export default EditStock;
