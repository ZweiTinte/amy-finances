import * as React from "react";

interface FileUploadProps extends TextProps {
  id: string;
  onChange: (params: any) => void;
  color?: string;
}

const FileUpload = ({ text, color, onChange, id }: FileUploadProps) => {
  return (
    <>
      <label htmlFor={id} className={color || ""}>
        {text}
      </label>
      <input
        type="file"
        id={id}
        onChange={onChange}
        className="fileUploadInput"
      />
    </>
  );
};

export default FileUpload;
