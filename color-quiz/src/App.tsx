import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | undefined>(
    undefined
  );
  const [resultPoints, setResultPoints] = useState(0);

  const randomColor = (): string => {
    const array = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    return (
      "#" +
      new Array(6)
        .fill("")
        .map(() => array[Math.floor(array.length * Math.random())])
        .join("")
    );
  };

  const generateNewGame = (): void => {
    const generatedColor = randomColor();
    setColor(generatedColor);
    setAnswers(
      [generatedColor, randomColor(), randomColor()].sort(
        (a, b) => 0.5 - Math.random()
      )
    );
    setIsCorrectAnswer(undefined);
  };

  const handleClick = (ans: string): void => {
    if (ans === color) {
      setIsCorrectAnswer(true);
      setResultPoints((p) => p + 1);
      setTimeout(generateNewGame, 1000);
      return;
    }
    setIsCorrectAnswer(false);
  };

  useEffect(() => {
    generateNewGame();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Choose correct hex symbol of color</h2>
      </header>
      <main>
        <h2 className="result-points">Your points: {resultPoints}</h2>
        <div
          className="color-box"
          style={{ backgroundColor: color ? color : "" }}
        ></div>
        <div className="answers-container">
          <div className="btn-container">
            {answers &&
              answers.map((ans) => {
                return (
                  <button
                    key={ans}
                    onClick={
                      isCorrectAnswer === undefined || isCorrectAnswer === false
                        ? () => handleClick(ans)
                        : () => {}
                    }
                    style={isCorrectAnswer === true ? { cursor: "wait" } : {}}
                  >
                    {ans}
                  </button>
                );
              })}
          </div>
          {isCorrectAnswer !== undefined && (
            <div
              className={
                isCorrectAnswer ? "result-msg correct" : "wrong result-msg"
              }
            >
              {isCorrectAnswer !== null
                ? isCorrectAnswer === true
                  ? "Correct"
                  : "Wrong!"
                : ""}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
