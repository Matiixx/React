import create from "zustand";
import userSlice from "./slices/userSlice";

const useStore = create((set, get) => ({
  ...userSlice(set, get),
}));

export default useStore;
