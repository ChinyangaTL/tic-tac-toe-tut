import { useState } from "react";

interface Props {
  changePlayer: () => void;
  cellIndex: number;
  handleCellClick: (cellIdx: number) => void;
  currentGrid: string[];
}

const Square: React.FC<Props> = ({
  changePlayer,
  cellIndex,
  handleCellClick,
  currentGrid,
}) => {
  const [isSquareClicked, setIsSquareClicked] = useState(false);

  const handleClick = (cellIdx: number) => {
    handleCellClick(cellIdx);
    changePlayer();
    setIsSquareClicked(true);
  };

  return (
    <button
      disabled={isSquareClicked}
      onClick={() => handleClick(cellIndex)}
      className="square"
      key={cellIndex}
    >
      {currentGrid[cellIndex] === "X" && <p>X</p>}
      {currentGrid[cellIndex] === "O" && <p>O</p>}
    </button>
  );
};

export default Square;
