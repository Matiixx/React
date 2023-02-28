import "./App.css";
import CounterContainer from "./components/CounterContainer";
import genericContext from "./context/genericContext";

const { Provider: GenericProvider, useStore } = genericContext({
  count: 0,
});
export { useStore };

function App() {
  return (
    <GenericProvider>
      <div className="App">
        <CounterContainer />
      </div>
    </GenericProvider>
  );
}
export default App;
