interface TextProps {
  text: string;
}

interface ButtonProps extends TextProps {
  color?: string;
  onClick: (params: any) => void;
}

interface Account {
  id: number;
  iban: string;
  name: string;
}
