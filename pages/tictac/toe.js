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
function Square() {
  return (
    <button className={styles['square-btn']}>X</button>
  )
}
