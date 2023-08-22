import Link from 'next/link';
import styles from './header.module.css'

export default function Header() {
  return ( 
      <header>
        <div className={styles.content}>
          <Link href='/'>
            <img src="./ARMAGEDDON.png" alt="logo" className={styles.logo} />
          </Link>
          <p className={styles.text}> 
          ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.
          </p>
        </div>

      </header>
   );
}

