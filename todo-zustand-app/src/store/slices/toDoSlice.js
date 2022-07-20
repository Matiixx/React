import { v4 as uuidv4 } from "uuid";

function initialState() {
  const saved = localStorage.getItem("todos");
  const initValue = JSON.parse(saved);
  return initValue || [];
}

const toDoSlice = (set, get) => ({
  toDoList: initialState(),

  addToDo: (todo) => {
    set({ toDoList: [...get().toDoList, { id: uuidv4(), body: todo }] });
    localStorage.setItem("todos", JSON.stringify(get().toDoList));
  },

  removeTodo: (id) => {
    set((state) => ({
      toDoList: state.toDoList.filter((todo) => todo.id !== id),
    }));
    localStorage.setItem("todos", JSON.stringify(get().toDoList));
  },
});

export default toDoSlice;
