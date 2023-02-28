import { useStore } from "../App";

function CounterButton() {
  const [count, setCount] = useStore((state) => state.count);
  return (
    <button onClick={() => setCount({ count: count + 1 })}>
      CounterButton
    </button>
  );
}

export default CounterButton;
