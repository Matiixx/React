import { useStore } from "../App";
import CounterDisplay from "./Counter";

function CounterContainer() {
  return (
    <div style={{ padding: "2rem", border: "1px solid black" }}>
      <CounterDisplay />
    </div>
  );
}

export default CounterContainer;
