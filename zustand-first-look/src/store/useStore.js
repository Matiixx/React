import create from "zustand";
import createPostsSlice from "./slices/createPostsSlice";
import createUserSlice from "./slices/createUserSlice";
import createAdvicesSlice from "./slices/createAdvicesSlice";

const useStore = create((set, get) => ({
  ...createUserSlice(set, get),
  ...createPostsSlice(set, get),
  ...createAdvicesSlice(set, get),
}));

export default useStore;
