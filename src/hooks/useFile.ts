import { ChangeEvent, useState } from "react";

export const useFile = (initial: null) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(initial);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
  };

  return {selectedFile, setSelectedFile, handleFileChange}
};
