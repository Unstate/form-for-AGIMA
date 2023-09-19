import classes from "../styles/Form.module.css";

import CustomInput from "./UI/CustomInput/CustomInput";
import FileInput from "./UI/FileInput/FileInput";

import buttonHelp from "../assets/button.svg";
import { ReactSVG } from "react-svg";
import { FC } from "react";

import { canSubmit } from "../utils/submit";
import { useFile, useInput, useTextarea, useToggle } from "../hooks";



interface FormProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

const Form: FC<FormProps> = ({ toggle, setToggle }) => {
  const name = useInput("");
  const company = useInput("");
  const number = useInput("");
  const email = useInput("");
  const message = useTextarea("");
  const file = useFile(null);
  const toggleButton = useToggle(false)

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      canSubmit(
        name.value,
        company.value,
        number.value,
        email.value,
        message.value,
        file.selectedFile,
        toggleButton.confirm
      )
    ) {
      console.log(
        name.value,
        company.value,
        number.value,
        email.value,
        message.value,
        file.selectedFile?.name
      );
    } else {
      console.log('Validation error')
    }
  };

  return (
    <form
      className={`${classes.customForm}`}
      onSubmit={(e) => handleOnSubmit(e)}
    >
      <div className={classes.contentForm}>
        <p className={classes.text}>Сообщение в свободной форме</p>
        <CustomInput
          title={"Ваше имя"}
          value={name.value}
          onChange={name.bind.onChange}
        />
        <CustomInput
          title={"Компания"}
          value={company.value}
          onChange={company.bind.onChange}
        />
        <CustomInput
          title={"Телефон"}
          value={number.value}
          onChange={number.bind.onChange}
        />
        <CustomInput
          title={"Электронная почта"}
          value={email.value}
          onChange={email.bind.onChange}
        />
        <div className={classes.messageAndFileContainer}>
          <div className={classes.messageContainer}>
            <div className={classes.messageTitle}>
              <p>Напишите текст сообщения</p>
              <ReactSVG
                src={buttonHelp}
                className={classes.buttonHelp}
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <textarea
              className={classes.message}
              value={message.value}
              onChange={message.bind.onChange}
            />
          </div>
          <div>
            <FileInput
              handleFileChange={file.handleFileChange}
              selectedFile={file.selectedFile}
              setSelectedFile={file.setSelectedFile}
            />
          </div>
        </div>
        <div className={classes.endFormContainer}>
          <div className={classes.confirmCointainer}>
            <button
              className={classes.buttonConfirm}
              onClick={(e) => toggleButton.handleOnClick(e)}
            >
              <div
                className={`${classes.confirm} ${
                  toggleButton.confirm ? classes.focused : ""
                }`}
              ></div>
            </button>
            <p className={classes.textConfirm}>
              cогласен на обработку моих{" "}
              <span className={classes.textConfirmSpan}>
                персональных данных
              </span>
            </p>
          </div>
          <button className={classes.submitButton}>Отправить</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
