import { FC } from "react";
import classes from "../styles/BackSide.module.css";
import { ReactSVG } from "react-svg";
import back from "../assets/back.svg";
import { backSideData } from "../constants/backSideData";
import TextField from "./UI/TextField/TextField";

interface BackSideProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

const BackSide: FC<BackSideProps> = ({ toggle, setToggle }) => {
  return (
    <main className={classes.backSideContainer}>
      <p className={classes.title}>Что написать в сообщении или файле?</p>
      <div className={classes.questionsContainer}>
        {backSideData.map((question, index) => (
          <TextField
            key={index}
            index={index}
            title={question.title}
            description={question.description}
          />
        ))}
      </div>
      <button className={classes.buttonBack} onClick={() => setToggle(!toggle)}>
        <ReactSVG src={back} />
        Вернуться к заполнению
      </button>
    </main>
  );
};

export default BackSide;
