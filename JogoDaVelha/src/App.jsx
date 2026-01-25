import { useState } from 'react';
import Board from './Components/Board';
import './App.css';
import DescendingButton from './Components/DescendingButton';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isDescending, setDescending] = useState(false);
  const [isDescendClick, setDescendingClick] = useState(false);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // Função que atualiza o histórico
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Função para pular um movimento
  function jumpTo(move) {
    setCurrentMove(move);
  }

  // lista de objetos {move, square} do histórico
  const info_list = history.map((squares, move) => ({ move, square: squares }));

  // Renderizando a lista de botões
  const render = info_list.map((item, index) => {

      // Calcula o índice visual do botão, subtrai de info_list ou então index de item
      const displayMove = isDescending ? info_list.length - 1 - index : item.move;

      return (
        <li className='todo-list' key={item.move}>
          <button className='todo-button' onClick={() => jumpTo(item.move)}>
            {displayMove === 0 ? 'Go to move #0' : `Go to move #${displayMove}`}
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
        <p className={currentMove <= 0 ? 'hidden' : 'visible'}>
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
