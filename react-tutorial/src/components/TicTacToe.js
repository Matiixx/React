import React, { useState } from 'react'
import { If, Else, Then } from 'react-if';
import { calculateWinner } from '../utils/calculateWinner';
import Board from './Board'

export default function TicTacToe() {

  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [next, setNext] = useState('X');
  const [isWinner, setIsWinner] = useState(null);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[history.length - 1];
    const squares = current.squares.slice();
    if(isWinner || squares[i])
    {
      return;
    }
    squares[i] = next;
    setHistory(prev => {
      return [...prev, { squares : squares }];
    });
    setNext(prev => {
      if(prev === 'X') return 'O';
      return 'X';
    });
    setStepNumber(history.length);
    if(calculateWinner(squares))
    {
      setIsWinner(next);
      return;
    }
  }
  console.log(isWinner)
  return (
    <>
    <div className='game-name'>TicTacToe</div>
    <div className='next-player'>
      <If condition={isWinner}>
        <Then>
         Winner: {isWinner}
        </Then>
        <Else>
          Next player: {next}
        </Else>
      </If>
    </div>
    <div className='game'>
      <div className='board'>
        <Board squareClick={handleClick} squares={history.slice(0, stepNumber + 1)[history.length - 1].squares}/>
      </div>
    </div>
    </>
  )
}
