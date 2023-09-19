import { ChangeEvent, FC } from "react";
import classes from "./FileInput.module.css";
import { ReactSVG } from "react-svg";
import close from "../../../assets/close.svg";

interface FileInputProps {
  selectedFile: File | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setSelectedFile: (value: React.SetStateAction<File | null>) => void
}

const FileInput: FC<FileInputProps> = ({ selectedFile, handleFileChange, setSelectedFile }) => {
  return (
    <div className={classes.fileInputContainer}>
      <input
        type="file"
        id="fileInput"
        accept=".docx"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className={`${classes.label} ${selectedFile ? classes.disabled : ""}`}>
        или прикрепите файл
      </label>
      {selectedFile && (
        <div className={classes.selectedFile}>
          <p>Выбранный файл: {selectedFile.name}</p>
          <ReactSVG src={close} className={classes.closeButton} onClick={() => setSelectedFile(null)} />
        </div>
      )}
    </div>
  );
};

export default FileInput;
