interface Props {
  currentPlayer: string;
}

const Header: React.FC<Props> = ({ currentPlayer }) => {
  return <p>Current Player is: {currentPlayer}</p>;
};

export default Header;
