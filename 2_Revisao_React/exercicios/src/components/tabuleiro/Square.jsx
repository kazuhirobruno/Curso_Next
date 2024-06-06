import styles from './Square.module.css'

export default function Square ({color}) {
  return (
    <div className={color === 1 ? styles.black : styles.white}></div>
  )
}