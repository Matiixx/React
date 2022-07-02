import create from "zustand";
import createPostsSlice from "./slices/createPostsSlice";
import createUserSlice from "./slices/createUserSlice";

const useStore = create((set, get) => ({
  ...createUserSlice(set, get),
  ...createPostsSlice(set, get),
}));

export default useStore;
