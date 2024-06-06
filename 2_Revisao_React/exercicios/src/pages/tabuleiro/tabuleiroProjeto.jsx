import Square from '../../components/tabuleiro/Square'
import styles from './tabuleiroProjeto.module.css'

export default function TabuleiroProjeto() {
  const table = 
  [[0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0]]
  return (
    <div className={styles.background}>
      <div>
        {
          table.map((item, index) => 
            <div className={styles.line}>
              {item.map(square => <Square color={square} />)}
            </div>
          )
        }
      </div>
    </div>
  )
}