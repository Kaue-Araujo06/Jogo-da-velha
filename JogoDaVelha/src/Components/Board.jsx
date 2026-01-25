import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

export default function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const result = calculateWinner(squares);

  let status;
  
  if (result) {
    status = 'Winner: ' + result.winner;
  } else if (squares.every(s => s !== null)) {
    status = 'Empate!';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  
  return (
    <>
      <div className="status">
        {status}
      </div>

      {[0, 3, 6].map((board_row, index) => (
        <div key={board_row} className={`board_row horizontal-squares${index + 1}`}>
          
          {[0, 1, 2].map((j) => {
            const squareIndex = board_row + j;

            const squareClasses = [];

            const winnerLine = result?.line;

            squareClasses.push(`horizontal-line${index}`);
            squareClasses.push(`vertical-line${j}`);

            if (squareIndex === 0 || squareIndex === 4 || squareIndex === 8) {
              squareClasses.push("diagonal-main");
            }
            if(squareIndex === 2 || squareIndex === 4 || squareIndex === 6) {
              squareClasses.push("diagonal-secondary")
            }

            if ( winnerLine?.includes(squareIndex)) {
              squareClasses.push("winning");
            }

            return (
              <Square
                key={squareIndex}
                className={squareClasses.join(" ")}
                value={squares[squareIndex]}
                onSquareClick={() => handleClick(squareIndex)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}