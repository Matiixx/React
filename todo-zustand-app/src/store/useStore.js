import create from "zustand";
import toDoSlice from "./slices/toDoSlice";

const useStore = create((set, get) => ({
  ...toDoSlice(set, get),
}));

export default useStore;
