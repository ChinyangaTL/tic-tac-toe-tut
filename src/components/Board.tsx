// @ts-nocheck
import { useState } from "react";
import Square from "./Square";

interface Props {
  changePlayer: () => void;
}

const Board: React.FC<Props> = ({ changePlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(""));

  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <Square key={index} changePlayer={changePlayer} cellIndex={index} />
        );
      })}
    </div>
  );
};

export default Board;
