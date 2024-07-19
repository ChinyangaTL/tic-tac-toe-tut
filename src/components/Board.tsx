import { useState } from "react";

interface Props {
  changePlayer: () => void;
}

const Board: React.FC<Props> = ({ changePlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(""));

  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <button onClick={changePlayer} className="square" key={index}>
            {index}
          </button>
        );
      })}
    </div>
  );
};

export default Board;
