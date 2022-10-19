import "./App.css";
import Header from "./components/Header";
import Login from "./components/LoginForm";
import Register from "./components/RegisterForm";
import useStore from "./store/useStore";

function App() {
  const isLogged = useStore((state) => state.isLogged);
  return (
    <div className="App">
      <Header />
      {isLogged === false && <Login />}
      {isLogged === false && <Register />}
    </div>
  );
}

export default App;
