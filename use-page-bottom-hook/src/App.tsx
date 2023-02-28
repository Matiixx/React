import "./App.css";
import usePageBottom from "./hooks/usePageBottom";

function App() {
  const reachedBottom = usePageBottom();
  console.log("reachedBottom", reachedBottom);
  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];
  return (
    <div className="App">
      {arr.map((num, index) => (
        <h2 key={index + " " + num}>{num}</h2>
      ))}
    </div>
  );
}

export default App;
