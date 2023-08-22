'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './asterInfo.module.css'
import { AsterInfo} from "@/app/types/types";
import getInfo from '@/app/utils/getInfo';
import { useInfo, useOrder } from '@/app/store';
import Bugs from '../bugs/Bugs';
import dateString from '@/app/utils/dateString';
import { sliceName } from '@/app/utils/sliceName';
import Link from 'next/link';





export default  function AsterInfo() {

  const [day, setDay] = useState(new Date())
  let tomorrow = day.getDate()
  const info  = useInfo((state) => state.info)
  const addInfo = useInfo((state) => state.addAsterInfo)
  const addProduct = useOrder((state) => state.addProduct)
  const api = async function sendRequest() {  
    try {
      const response: AsterInfo[] | any = await getInfo(day.getFullYear() + "-" + day.getMonth() + "-" + day.getDate())
      for (let i = 0; i < response.length; i++) {   
        addInfo(response[i])
      }
      setDay(new Date(day.setDate(tomorrow += 1)))

    } catch (e) {
      console.log(e);
    }
  } 


  const bottomOfList = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(()=> {  
      api()
    })
   
  

    if(bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }


    return () => {
      if(bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current]
  )

  function handleAddProduct(item: AsterInfo) {
    addProduct(item)
  }


  return ( 
    <div className={styles.content}>

      <div className={styles.box}>
        {info && info.length > 0 
        ? 
        info.map((item: AsterInfo) => 
            (
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
                    <button className={styles.btn} onClick={() => handleAddProduct(item)}>
                      Заказать
                    </button>
                    
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
             
            )
         )
          : 

          <div>
            <h1 className={styles.load}>Загрузка...</h1>
          </div>

        }
          

        <div ref={bottomOfList}></div>   
      </div>
      <Bugs/>
    </div>
   );
}

