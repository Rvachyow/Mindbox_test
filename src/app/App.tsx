import { TodoBody } from "../widgets/todo-body";
import style from "./styles.module.scss";

export const App = () => {
  return (
    <div className={style.wrapper}>
      <h1>todos</h1>
      <TodoBody></TodoBody>
    </div>
  );
};
