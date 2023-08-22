import AsterInfo from './components/AsterInfo/AsterInfo';
import styles from './page.module.css'





export default async function Home() {

  return (
    <div className={styles.content}>
      <h1 className={styles.header}>
        Ближайшие подлёты астероидов
      </h1>
      <div className={styles.btnBox}>
        <button className={styles.btn}>
          в километрах
        </button>
        <span>|</span>
        <button className={styles.btn}>
          в лунных орбитах
        </button>
      </div>
      
      
      <AsterInfo/>
        
      
      
    </div>
    )
}


