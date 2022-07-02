const createPostsSlice = (set, get) => ({
  posts: [],
  fetchPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    set({ posts: await res.json() });
  },
});

export default createPostsSlice;
