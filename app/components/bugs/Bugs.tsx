import { useOrder } from '@/app/store';
import styles from './bugs.module.css';
import Link from 'next/link';


export default function Bugs() {
  const order = useOrder((state) => state.order)
  // const info = useInfo((state) => state.info)

  // let  thisOrder = []
  // useEffect(() => {
  //   for (let i = 0; i < order.length; i++) {
  //     thisOrder.push(info.filter((item: AsterInfo) => item.id == order[i])    )
  //   }
  // }, [order])

  

  return ( 
    <div className={styles.bugs}>
        <div>
          <h2 className={styles.subHeader}>
            Корзина
          </h2>
          <p className={styles.order}>
            {order.length} астеройда
          </p>
        </div>
        <Link href='/order' className={styles.send}>
          Отправить
        </Link >
      </div>
   );
}

