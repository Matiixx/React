export function debounce<F extends (...args: any[]) => void>(
  callback: F,
  TIME: number
): (...args: Parameters<F>) => void {
  let setTimeoutId: any;
  return function debounced(...args: Parameters<F>) {
    const context: any = this;
    if (setTimeoutId) clearInterval(setTimeoutId)
    setTimeoutId = setTimeout(() => {
      callback.apply(context, args)
    }, TIME)
  }
}

export function debounce2<F extends (...args: any[]) => void>(
  func: F,
  wait: number
): (...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return function debounced(...args: Parameters<F>) {
    const context = this;

    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(context, args), wait);
  };
}
