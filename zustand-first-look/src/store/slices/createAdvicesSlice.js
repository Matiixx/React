const createAdvicesSlice = (set, get) => ({
  advice: {},
  fetchNewAdvice: async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    set({ advice: await res.json() });
  },
});

export default createAdvicesSlice;
