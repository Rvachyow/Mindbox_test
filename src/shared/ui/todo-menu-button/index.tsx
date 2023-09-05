import { memo } from "react";

interface ITodo {
  text: string;
  setStatus: (arg: string) => void;
}

export const TodoMenuButton = memo(({ text, setStatus }: ITodo) => {
  const handleActiveStatus = () => {
    setStatus(text);
  };
  return <button onClick={handleActiveStatus}>{text}</button>;
});
