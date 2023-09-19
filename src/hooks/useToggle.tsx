import { useState } from "react";

export const useToggle = (initial:false) => {
  const [confirm, setConfirm] = useState<boolean>(initial);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setConfirm((prev) => !prev);
  };

  return {confirm, setConfirm, handleOnClick}
};
