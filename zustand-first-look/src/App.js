import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Advices from "./components/Advices/Advices";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/advice" element={<Advices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
