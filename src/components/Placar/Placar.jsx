import styles from './Placar.module.css';

export default function Placar({ vitoriasX, vitoriasO, empates }) {
  return (
    <div className={styles.placar}>
      <h2 className={styles.placar__titulo}>Placar Acumulado</h2>
      <div className={styles.placar__conteudo}>
        <div className={`${styles.placar__item} ${styles['placar__item--x']}`}>
          <span className={styles.placar__rotulo}>Jogador X</span>
          <span className={styles.placar__valor}>{vitoriasX}</span>
        </div>
        <div className={`${styles.placar__item} ${styles['placar__item--empate']}`}>
          <span className={styles.placar__rotulo}>Empates</span>
          <span className={styles.placar__valor}>{empates}</span>
        </div>
        <div className={`${styles.placar__item} ${styles['placar__item--o']}`}>
          <span className={styles.placar__rotulo}>Jogador O</span>
          <span className={styles.placar__valor}>{vitoriasO}</span>
        </div>
      </div>
    </div>
  );
}