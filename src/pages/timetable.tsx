import * as React from "react";
import Timetable from "../components/atoms/timetable";
import FileUpload from "../components/atoms/fileUpload";

const TestPage = () => {
  const [image, setImage] = React.useState<File | null>(null);
  const [imageUrl, setImageUrl] = React.useState<string>("");

  React.useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <div className="gameLayout">
      <div className="transactionsCard">
        <Timetable />
        <div className="formRow">
          <FileUpload
            id="upload"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            text="Upload"
            color="uploadButton"
          />
          {imageUrl && (
            <img id="blah" src={imageUrl} alt="your image" className="image" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
