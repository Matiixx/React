import "./App.css";
import CounterContainer from "./components/CounterContainer";
import { Provider } from "./context/counterContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <CounterContainer />
      </div>
    </Provider>
  );
}

export default App;
