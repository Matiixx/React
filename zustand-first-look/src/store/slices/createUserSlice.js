const createUserSlice = (set, get) => ({
  users: [],
  highlighted: [],
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    set({ users: await res.json() });
  },
  addToHighlight: (user) => {
    set({ highlighted: user });
  },
});

export default createUserSlice;
