// @ts-nocheck
import { useState } from "react";
import Square from "./Square";

interface Props {
  changePlayer: () => void;
  currentPlayer: string;
}

const Board: React.FC<Props> = ({ changePlayer, currentPlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(""));

  const handleClick = (cellIdx: number) => {
    console.log(`Cell ${cellIdx} clicked`);
    const grid = [...squares];
    grid[cellIdx] = currentPlayer;
    console.log(grid);
    setSquares(grid);
  };

  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <Square
            key={index}
            changePlayer={changePlayer}
            cellIndex={index}
            handleCellClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Board;
