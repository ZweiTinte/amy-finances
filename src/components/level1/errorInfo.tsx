import * as React from "react";
import Button from "../atoms/button";

const ErrorInfo = ({
  message,
  tryAgain,
}: {
  message: string;
  tryAgain: () => void;
}) => {
  return (
    <div className="colLayout">
      <div className="errorMessage">{message}</div>
      <Button text="Try again" onClick={tryAgain} color={"nextButton"} />
    </div>
  );
};

export default ErrorInfo;
