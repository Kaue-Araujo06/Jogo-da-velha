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

    const line = Math.floor(i / 3);
    const column = i % 3

    onPlay(nextSquares, line, column);
  }

  const result = calculateWinner(squares);

  let status;

  const boardFull = squares.every(square => square !== null)
  
  if (result) {
    status = 'Winner: ' + result.winner;
  } else if (boardFull) {
    status = 'Empate!';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  
  return (
    <>
      <div className="status">
        {status}
      </div>

      {[0, 3, 6].map((board_row, line) => (
        <div key={board_row} className={`board_row`}>
          
          {[0, 1, 2].map((j, column) => {

            const squareIndex = board_row + j;

            const squareClasses = [];

            const winnerLine = result?.line;

            if ( winnerLine?.includes(squareIndex)) {
              squareClasses.push("winning");
            }


            return (
              <Square
                key={squareIndex}
                className={squareClasses.join(" ")}
                value={squares[squareIndex]}
                column={column}
                line={line}
                onSquareClick={() => handleClick(squareIndex)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}