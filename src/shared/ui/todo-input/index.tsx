import arrow from "../../svg/arrow.svg";
import style from "./style.module.scss";

interface ITodoInput {
  setInput: (arg: string) => void;
  input: string;
  handleCreateTodo: () => void;
  handleToggleBody: () => void;
}

interface HandleNameChangeInterface {
  target: HTMLInputElement;
}

export const TodoInput = ({
  setInput,
  input,
  handleCreateTodo,
  handleToggleBody,
}: ITodoInput) => {
  const handleInputChange = (e: HandleNameChangeInterface) => {
    setInput(e.target.value);
  };
  return (
    <div className={style.input}>
      <div className={style.container}>
        <div onClick={handleToggleBody} className={style.arrow}>
          <img src={arrow} alt="" />
        </div>
        <div className={style.input__actions}>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="What needs to be done?"
            type="text"
          />
          <button onClick={handleCreateTodo}>send</button>
        </div>
      </div>
    </div>
  );
};
