import { useState } from "react";
import classes from "../styles/FormContainer.module.css";
import Form from "./Form";
import BackSide from "./BackSide";

const FormContainer = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className={`${classes.flipContainer} ${toggle ? classes.flip : ""}`}>
      <div className={classes.flipper}>
        <div className={classes.front}>
          <Form toggle={toggle} setToggle={setToggle} />
        </div>
        <div className={classes.back}>
          <BackSide toggle={toggle} setToggle={setToggle}/>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
