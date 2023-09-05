import { memo } from "react";
import { MENU_CONSTANTS } from "../../shared/ui/todo-menu-button/constants";
import { TodoMenuButton } from "../../shared/ui/todo-menu-button";
import style from "./style.module.scss";

interface ITodoMenu {
  handleClearCompleted: () => void;
  todoCount: number;
  setStatus: (arg: string) => void;
}

export const TodoMenu = memo(
  ({ handleClearCompleted, todoCount, setStatus }: ITodoMenu) => {
    
    return (
      <div className={style.container}>
        <div>{todoCount} items left</div>
        <div className={style.buttons}>
          {MENU_CONSTANTS.map((item) => (
            <TodoMenuButton
              key={item.text}
              setStatus={setStatus}
              {...item}
            ></TodoMenuButton>
          ))}
        </div>
        <button onClick={() => handleClearCompleted()}>Clear completed</button>
      </div>
    );
  }
);
