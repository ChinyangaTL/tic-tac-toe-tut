import { useState } from "react";

interface Props {
  changePlayer: () => void;
  cellIndex: number;
  handleCellClick: (cellIdx: number) => void;
}

const Square: React.FC<Props> = ({
  changePlayer,
  cellIndex,
  handleCellClick,
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
      {cellIndex}
    </button>
  );
};

export default Square;
