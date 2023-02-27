import "./App.css";
import MultiSelect from "./components/MultiSelect";

function App() {
  return (
    <div className="App">
      <MultiSelect options={["a", "b", "c"]} />
    </div>
  );
}

export default App;
