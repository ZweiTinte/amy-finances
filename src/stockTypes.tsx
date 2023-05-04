interface StockTemplateProps {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  isin: string;
  setIsin: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

export interface StockFormProps extends StockTemplateProps {
  submitHandler: (e: React.SyntheticEvent) => void;
  deleteSelectedStock?: () => void;
}

export interface EditStockProps extends StockTemplateProps {
  id: string;
}
