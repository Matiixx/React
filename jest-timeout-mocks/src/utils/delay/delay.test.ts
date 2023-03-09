import delay from "./delay"

describe('delay', () => {

  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

  it("delay with zero TIME returns identity function", async () => {
    const delayFn = delay<string>(0);
    const promise = delayFn("world");
    jest.advanceTimersByTime(0);
    const result = await promise;
    expect(result).toBe("world");
  });

  it("delay with negative TIME returns identity function", async () => {
    const delayFn = delay<string>(-100);
    const promise = delayFn("world world");
    jest.advanceTimersByTime(0);
    const result = await promise;
    expect(result).toBe("world world");
  });

  it("delay with positive TIME returns Promise that resolves with data after TIME", async () => {
    const delayFn = delay<string>(1000);

    const promise = delayFn("world");
    jest.advanceTimersByTime(1000);
    const result = await promise;

    expect(result).toBe("world");
  });

  it("delay should return object", async () => {
    const delayFn = delay<{ name: string }>(1000);

    const promise = delayFn({ name: "John" });
    jest.advanceTimersByTime(1000);
    const result = await promise;

    expect(result).toEqual({ name: "John" });
  });
  jest.clearAllTimers()
})