// @ts-nocheck
import { useEffect, useState } from "react";
import "./AppStyles.css";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));

  useEffect(() => {
    console.log(squares);
  }, []);
  return (
    <>
      <div className="board">
        {squares.map((square, index) => {
          return (
            <button className="square" key={index}>
              {index}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
