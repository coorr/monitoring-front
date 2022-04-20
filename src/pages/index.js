import React, { Component, useEffect } from "react";
import Link from 'next/link'
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "../components/ItemPost";
import styles from '../components/css/Product.module.scss'
import { GET_ITEM_REQUEST } from "../reducers/item";


const index = () => {
  const dispatch = useDispatch();
  const { item, hasMoreItem, getItemLoading } = useSelector((state) => state.item)

  useEffect(() => {
    dispatch({
      type: GET_ITEM_REQUEST,
    })
  },[]);

  useEffect(() => {
    function onScroll() {
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if(hasMoreItem && !getItemLoading) {
          dispatch({
            type: GET_ITEM_REQUEST,
          })
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [hasMoreItem]);

  return (
    <>
      <Header />
      {/* <div style={{height:'200px'}}></div> */}
      <div className={styles.p__grid}>
         {item.map((item,i) => <ItemPost key={i} item={item} />)}  
      </div>
    </>
  )
}

export default index