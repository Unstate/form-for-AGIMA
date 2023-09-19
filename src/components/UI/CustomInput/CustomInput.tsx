import React, { ChangeEvent, useState } from 'react';
import classes from './CustomInput.module.css'; // Создайте стили для компонента

interface CustomInputProps {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ title, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  return (
    <div className={`${classes.container} ${isFocused ? classes.focused : ''}`}>
      <label className={`${classes.label} ${isFocused || value ? classes.up : ''}`} htmlFor="input">
        {title}
      </label>
      <input
        id="input"
        type="text"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        className={classes.inputField}
      />
    </div>
  );
};

export default CustomInput;