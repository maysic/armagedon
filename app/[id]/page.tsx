'use client'
import Link from 'next/link'
import { useInfo } from '../store'
import { AsterInfo } from '../types/types'
import styles from './page.module.css'

export type Props = {
  params: {
    id: string

  }
}

export default function AsterPage({params: { id}}: Props) {
  const info = useInfo((state) => state.info)
  console.log(info);
  const thisInfo: AsterInfo[] = info.filter((item: AsterInfo) => item.id == id)
  // console.log(thisInfo, 'this');
  return ( 
    <div className={styles.content}>
        {thisInfo[0] ?  
          <>
            <h1 className={styles.name}>
              Имя астеройда: {thisInfo[0].name}
            </h1>
            <p className={styles.orbita}>
              Орбитальное тело: {thisInfo[0].close_approach_data[0].orbiting_body}
            </p>
            <p className={styles.danger}>
              Статус опасности:
              {thisInfo[0].is_potentially_hazardous_asteroid == true 
              ?
              <span className={styles.red}>
                Опасен
              </span>
              : 
              <span className={styles.green}>
                Не опасен
              </span>
              }
            </p>
            <Link href='/' className={styles.back}>
              Назад к списку
            </Link>
          </>
        : 
        <>
        </>
        }
    </div>
   );
}

