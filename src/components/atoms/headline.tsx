import * as React from "react";

interface HeadlineProps extends TextProps {
  deckSize?: number;
  style?: string;
}

const Headline = ({ text, deckSize, style }: HeadlineProps) => {
  return (
    <div className={style || "headline"}>
      <>{text}</>
      {deckSize && <div>{deckSize}</div>}
    </div>
  );
};

export default Headline;
