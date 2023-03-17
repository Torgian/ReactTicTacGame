import { useState } from 'react';
import styles from '../../styles/Toe.module.css';

export default function ticTacText() {
  return (
    <>
      <h1>Welcome To TicTacToe</h1>

      <Card></Card>
    </>
  )
}

function Card() {
  return (
    <div className={`${styles.card} ${styles['text-center']}`}>
      <div className={styles.row}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className={styles.row}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className={styles.row}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>
  )
}

let currentPlayer = 'X';

function Square() {
  const [ turn, setTurn ] = useState(null);

  const handleClick = () => {
    if (turn) return
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setTurn(currentPlayer);
  }

  return (
    <button
      className={styles['square-btn']}
      onClick={handleClick}
      >
        {turn}
    </button>
  )
}
