import { useState } from 'react';
import Board from '../Components/Board'
import '../App.css';
import DescendingButton from '../Components/DescendingButton';
import NavBar from '../Components/NavBar';



  

  // futurely implement a rank system, show in navbar you position ( like ranking: 2#)  

export default function Game() {
  const [history, setHistory] = useState([{squares: Array(9).fill(null), line: null, column: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isDescending, setDescending] = useState(false);
  const [isDescendClick, setDescendingClick] = useState(false);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  // Função que atualiza o histórico
  function handlePlay(nextSquares, line, column) {
    const nextHistory = [...history.slice(0, currentMove + 1), 
      {
        squares: nextSquares,
        line: line,
        column: column
    } ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // function jump to next move
  function jumpTo(move) {
    setCurrentMove(move);
  }

  // obj list {move, square} of history
  const info_list =  history.map((squares, move) => ({ move, square: squares }));

  // Render buttom list 
  const render = info_list.map((item, index) => {

      // Calcula o índice visual do botão, subtrai de info_list ou então index de item
      const displayMove = isDescending ? info_list.length - 1 - index : item.move;

      return (
        <li className='todo-list' key={item.move}>
          <button className='todo-button' onClick={() => jumpTo(item.move)}>
            {
            displayMove === 0 ? 'Go to move #0' : `Go to move #${displayMove} //
            Line: ${item.square.line+1} column: ${item.square.column+1}`
            }
          </button>
        </li>
      );
    });

  


  return (
    <div className="game">

    
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <p 
        className={currentMove <= 0 ? 'hidden' : 'visible'}
        >
          Present Move is #{currentMove}
        </p>

        {/* Toggle de ordem e efeito */}
        <DescendingButton onClick={() =>{ 
          setDescending(prev => !prev);
          setDescendingClick(prev => !prev)
        }} 
        isActiveEffect = {isDescendClick} 
          />

        <ol className="container-todo">{render}</ol>
      </div>
    </div>
  );
}
