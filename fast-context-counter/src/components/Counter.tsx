import { useStore } from "../App";
import CounterButton from "./CounterButton";

function CounterDisplay() {
  const [count] = useStore((state) => state.count);
  return (
    <div>
      <span>Count: {count}</span>
      <CounterButton />
    </div>
  );
}

export default CounterDisplay;
