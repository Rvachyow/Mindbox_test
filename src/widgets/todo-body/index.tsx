import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoInput } from "../../shared/ui/todo-input";
import { TodoBodyItems } from "../todo-body-items";
import { TodoMenu } from "../todo-menu";
import {
  ChangeStatus,
  CompletCounter,
  CreateTodo,
  FilterTodo,
} from "../../shared/lib/todoUtils";
import style from "./styles.module.scss";

export interface ITodoData {
  text: string;
  complet: boolean;
  id: string;
}

export const TodoBody = () => {
  const [data, setData] = useState<ITodoData[]>([]);
  const [filtredData, setFiltredData] = useState(data);
  const [input, setInput] = useState("");
  const [activeBody, setActiveBody] = useState(true);
  const [todoCount, setTodoCount] = useState<number>(data.length);
  const [status, setStatus] = useState<any>("All");
  const uuid = uuidv4();

  const handleCreateTodo = () => {
    if (!input) return;
    const model = CreateTodo(input, uuid);
    setData([...data, model]);
    setInput("");
  };

  const handleToggleBody = () => {
    setActiveBody((prev) => !prev);
  };

  const handleDeleatTodo = useCallback(
    (id: string) => {
      if (!id) return;
      const filterArr = data.filter((item) => item.id !== id);
      return setData(filterArr);
    },
    [data]
  );

  const handleToggleStatus = useCallback(
    (id: string) => {
      if (!id) return;
      const change = ChangeStatus(data, id);
      setData(change);
    },
    [data]
  );

  const howManyCompleted = () => {
    const counter = CompletCounter(data);
    setTodoCount((prev) => prev - counter);
  };

  const handleClearCompleted = useCallback(() => {
    const filterComplet = data.filter((item) => item.complet !== true);
    setData(filterComplet);
  }, [data]);

  const handleFilterTodo = () => {
    const filterArray = FilterTodo(status, data);
    setFiltredData(filterArray);
  };

  useEffect(() => {
    setTodoCount(data.length);
    howManyCompleted();
  }, [data]);

  useEffect(() => {
    handleFilterTodo();
  }, [data, status]);

  return (
    <div className={style.body}>
      <TodoInput
        handleCreateTodo={handleCreateTodo}
        input={input}
        setInput={setInput}
        handleToggleBody={handleToggleBody}
      />
      {activeBody && (
        <>
          {" "}
          <TodoBodyItems
            filtredData={filtredData}
            handleToggleStatus={handleToggleStatus}
            handleDeleatTodo={handleDeleatTodo}
          ></TodoBodyItems>
          <TodoMenu
            todoCount={todoCount}
            handleClearCompleted={handleClearCompleted}
            setStatus={setStatus}
          ></TodoMenu>
        </>
      )}
    </div>
  );
};
