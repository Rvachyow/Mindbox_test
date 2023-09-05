import { TodoComplet } from "../todo-complet";
import clsx from "clsx";
import del from "../../svg/del.png";
import style from "./styles.module.scss";
import { memo } from "react";

interface ITodoItem {
  text: string;
  complet: boolean;
  handleDeleatTodo: (arg: string) => void;
  handleToggleStatus: (arg: string) => void;
  id: string;
}

export const TodoItem = memo(({
  text,
  complet,
  handleDeleatTodo,
  id,
  handleToggleStatus,
}: ITodoItem) => {

  return (
    <div className={style.item}>
      <TodoComplet
        id={id}
        handleToggleStatus={handleToggleStatus}
        complet={complet}
      ></TodoComplet>
      <div className={style.item__container}>
        <span className={clsx(style.text, { [style.complet]: complet })}>
          {text}
        </span>
        <div onClick={() => handleDeleatTodo(id)} className={style.delbutton}>
          <img src={del} alt="" />
        </div>
      </div>
    </div>
  );
});
