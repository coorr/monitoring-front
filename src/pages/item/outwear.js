import React, {useEffect} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "../../components/item/ItemPost";
import styles from '../../components/css/Product.module.scss'
import { GET_ITEM_FIRST_REQUEST, GET_ITEM_REQUEST } from '../../reducers/item';


const outwear = () => {
    const dispatch = useDispatch();
    const { item, hasMoreItem, getItemLoading } = useSelector((state) => state.item)
  
    useEffect(() => {
      dispatch({
        type: GET_ITEM_FIRST_REQUEST,
        category: "outwear"
      })
    },[]);
  
    useEffect(() => {
      function onScroll() {
        if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
          if(hasMoreItem && !getItemLoading) {
            const lastId = item[item.length - 1]?.itemId;
            const size = 12;
            dispatch({
              type: GET_ITEM_REQUEST,
              data: { lastId, size},
              category: "outwear"
            })
          }
        }
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      }
    }, [hasMoreItem, getItemLoading, item]);
  
  
    return (
      <>
        <Header />
        <div className="middle_space_screen" />
        <div className={styles.p__grid}>
           {item.map((item,i) => <ItemPost key={item.itemId} item={item} />)}  
        </div>
        <Footer />
      </>
    )
}

export default outwear