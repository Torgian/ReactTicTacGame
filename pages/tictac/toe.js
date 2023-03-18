import { useState } from 'react';
import styles from '../../styles/Toe.module.css';

export default function ticTacText() {
  const [ turnIsX, setTurn ] = useState(true)
  const [ hasWinner, setHasWinner ] = useState(false)
  const currentTurn = turnIsX ? 'X' : 'O'

  const handleTurn = (squares) => {
    setHasWinner(checkForWinner(squares))
    if (!checkForWinner(squares)) {
      setTurn(!turnIsX)
    }
  }


  return (
    <>
      <h1>Welcome To TicTacToe</h1>
      <TurnOrWinner hasWinner={hasWinner} currentTurn={currentTurn} />
      <Board currentTurn={currentTurn} changeTurn={(squares) => handleTurn(squares)} hasWinner={hasWinner}></Board>
    </>
  )
}

function checkForWinner(squares) {
  const winningSlots = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  for (let i = 0; i < winningSlots.length; i++) {
    const [a, b, c] = winningSlots[i]

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true
    }
  }
  return false
}


function TurnOrWinner(props) {
  if (props.hasWinner) {
    return (
      <>
        <h1>We have a winner!</h1>
        <h4>Congratulations, Player {props.currentTurn}</h4>
      </>
    )
  } else {
    return (
      <h1>Current Player: {props.currentTurn}</h1>
    )
  }
}

function Board({currentTurn, changeTurn, hasWinner}) {
  const [ squares, setSquares ] = useState(Array(9).fill(null))

  function handleClick(i) {
    if (squares[i] || hasWinner) return
    const nextSquares = squares.slice()
    nextSquares[i] = currentTurn
    setSquares(nextSquares)
    changeTurn(nextSquares)
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
