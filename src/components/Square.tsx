interface Props {
  changePlayer: () => void;
  cellIndex: number;
}

const Square: React.FC<Props> = ({ changePlayer, cellIndex }) => {
  return (
    <button onClick={changePlayer} className="square" key={cellIndex}>
      {cellIndex}
    </button>
  );
};

export default Square;
