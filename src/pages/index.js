import React, { Component, useEffect } from "react";
import Link from 'next/link'
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "../components/ItemPost";
import styles from '../components/css/Product.module.scss'
import { GET_ITEM_REQUEST } from "../reducers/item";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";


const index = () => {
  const dispatch = useDispatch();
  const { item, hasMoreItem, getItemLoading } = useSelector((state) => state.item)

  useEffect(() => {
    console.log("넌 몇번 시작하니");
    dispatch({
      type: GET_ITEM_REQUEST,
    })
  },[]);

  useEffect(() => {
    function onScroll() {
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if(hasMoreItem && !getItemLoading) {
          const lastId = item[item.length - 1]?.itemId;
          const size = 10;
          dispatch({
            type: GET_ITEM_REQUEST,
            data: { lastId, size}
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
         {item.map((item,i) => <ItemPost key={i} item={item} />)}  
      </div>
    </>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(async(context) => {
//   context.store.dispatch({
//     type: GET_ITEM_REQUEST,
//   })

//   context.store.dispatch(END);
//   await context.store.sagaTask.toPromise();
// })

export default index