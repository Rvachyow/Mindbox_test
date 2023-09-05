import { memo } from "react";
import { TodoItem } from "../../shared/ui/todo-item";
import { ITodoData } from "../todo-body";
import style from "./styles.module.scss";

interface IBodyItem {
  filtredData: ITodoData[];
  handleDeleatTodo: (arg: string) => void;
  handleToggleStatus: (arg: string) => void;
}

export const TodoBodyItems = memo(
  ({ filtredData, handleDeleatTodo, handleToggleStatus }: IBodyItem) => {
    return (
      <div className={style.body_items}>
        {filtredData.map((item) => (
          <TodoItem
            handleDeleatTodo={handleDeleatTodo}
            handleToggleStatus={handleToggleStatus}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    );
  }
);
