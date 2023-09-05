import { ITodoData } from "../../widgets/todo-body";
export const CreateTodo = (text: string, id: string) => {
  const model: ITodoData = {
    text: text,
    complet: false,
    id: id,
  };
  return model;
};

export const ChangeStatus = (data: ITodoData[], id: string) => {
  const copy = [...data];
  for (let i = 0; i < copy.length; i++) {
    if (copy[i].id === id) {
      copy[i].complet = !copy[i].complet;
    }
  }
  return copy;
};

export const CompletCounter = (data: ITodoData[]) => {
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].complet === true) {
      counter = counter + 1;
    }
  }
  return counter;
};

export const FilterTodo = (status: string, data: ITodoData[]): ITodoData[] => {
  const copy = [...data];
  let res = copy;
  switch (status) {
    case "All":
      res = copy;
      break;
    case "Active":
      res = copy.filter((item) => item.complet == false);
      break;
    case "Completed":
      res = copy.filter((item) => item.complet !== false);
      break;
  }

  return res;
};
