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
  const handleClick = (cellIdx: number) => {
    handleCellClick(cellIdx);
    changePlayer();
  };

  return (
    <button
      onClick={() => handleClick(cellIndex)}
      className="square"
      key={cellIndex}
    >
      {cellIndex}
    </button>
  );
};

export default Square;
