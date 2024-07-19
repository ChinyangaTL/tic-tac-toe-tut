// @ts-nocheck
import { useEffect, useState } from "react";
import "./AppStyles.css";
import Header from "./components/Header";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const changePlayer = () => {
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  };

  useEffect(() => {
    console.log(squares);
  }, []);
  return (
    <>
      <Header currentPlayer={currentPlayer} />
      <div className="board">
        {squares.map((square, index) => {
          return (
            <button onClick={changePlayer} className="square" key={index}>
              {index}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
