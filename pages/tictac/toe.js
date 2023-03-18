import { useState } from 'react';
import styles from '../../styles/Toe.module.css';

export default function ticTacText() {
  return (
    <>
      <h1>Welcome To TicTacToe</h1>

      <Board></Board>
    </>
  )
}

function Board() {
  const [ squares, setSquares ] = useState(Array(9).fill(null))
  const [ turnIsX, setTurn ] = useState(true)

  function handleClick(i) {
    if (squares[i]) return
    const nextSquares = squares.slice()
    nextSquares[i] = turnIsX ? 'X' : 'O'
    setSquares(nextSquares)
    setTurn(!turnIsX)
  }

  return (
    <div className={`${styles.card} ${styles['text-center']}`}>
      <div className={styles.row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      </div>
      <div className={styles.row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      </div>
      <div className={styles.row}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
    </div>
  )
}



function Square({value, onSquareClick}) {
  return (
    <button
      className={styles['square-btn']}
      onClick={onSquareClick}
      >
        {value}
    </button>
  )
}
