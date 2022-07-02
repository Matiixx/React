const createUserSlice = (set, get) => ({
  users: [],
  highlightedUsers: [],
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    set({ users: await res.json() });
  },
  addToHighlight: (user) => {
    set({ highlightedUsers: [...new Set([...get().highlightedUsers, user])] });
  },
  deleteFromHighlight: (user) => {
    set((state) => ({
      highlightedUsers: state.highlightedUsers.filter((u) => {
        return u.id !== user.id;
      }),
    }));
  },
});

export default createUserSlice;
