export default function delay<T>(TIME: number) {
  if (TIME <= 0) return (data: T) => data;

  return (data: T) => new Promise((res: (value: T) => void) => setTimeout(() => res(data), TIME));
}
