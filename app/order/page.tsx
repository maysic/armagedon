'use client'
import Link from 'next/link';
import { useOrder } from '../store';
import { AsterInfo } from '../types/types';
import dateString from '../utils/dateString';
import styles from './page.module.css'
import { sliceName } from '../utils/sliceName';

export default function Order() {
  const order = useOrder((state) => state.order)
  return ( 
        <div className={styles.content}>
          {order && order.length > 0 ?
          
          <>
            <h1 className={styles.header}>
              Заказ отправлен!
            </h1>
            {order.map((item: AsterInfo) => (
                <div className={styles.asterInfo} key={item.id}>
                  <h3 className={styles.date}>
                    {dateString(item.close_approach_data[0].close_approach_date)}
                  </h3>
                  <div className={styles.params}>
                    <div className={styles.asterParams}>
                      <span className={styles.distance}>
                        {Math.floor(Number(item.close_approach_data[0].miss_distance.kilometers)) + ' км'}
                      </span>
                      <img src="./arrow.png" alt="arrow" className={styles.arrow} />
                    </div>
                    <img src="./asteroid.png" alt="asteriod" className={styles.asteriod} />
                    <div className={styles.asterParams}>
                      <Link href={`${item.id}`} className={styles.name}>{sliceName(item.name)}</Link>
                      <span>&#216; {Math.floor(item.estimated_diameter.meters.estimated_diameter_min)} м</span>
                    </div>
                  </div>
                  <div className={styles.order}>            
                    { item.is_potentially_hazardous_asteroid == true 
                      ?
                        <p className={styles.danger}>
                          ⚠️ Опасен
                        </p> 
                      :
                        <></>
                    }
                  </div>
              </div>
            ))}
            <Link href='/' className={styles.back}>
              Назад к выбору
            </Link>
          </>
          : 
         <>
          <h1 className={styles.header}>
            Заказ не сделан
          </h1>
          <Link href='/' className={styles.back}>
            Назад к выбору
          </Link>
         </>
        }
        </div>
   );
}

