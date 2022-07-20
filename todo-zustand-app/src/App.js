import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodosList from "./components/TodosList/TodosList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodosList />
    </div>
  );
}

export default App;
