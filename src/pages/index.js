import React, { Component, useEffect } from "react";
import Link from 'next/link'
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "../components/ItemPost";
import styles from '../components/css/Product.module.scss'
import { GET_ITEM_REQUEST } from "../reducers/item";


const index = () => {
  const { item } = useSelector((state) => state.item)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_ITEM_REQUEST,
    })
  },[]);

  return (
    <>
      <Header />
      {/* <div style={{height:'200px'}}></div> */}
      <div className={styles.p__grid}>
         {item.map((item) => <ItemPost key={item.id} item={item} />)}  
      </div>
    </>
  )
}

export default index