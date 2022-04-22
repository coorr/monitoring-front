import Head from 'next/head';
import {  useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header';
import ItemDetail from '../../components/item/ItemDetail';
import { GET_ITEM_ONE_REQUEST } from '../../reducers/item';

const Item = () =>  {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const { itemOne, getItemOneDone  } = useSelector((state) => state.item);

  useEffect(() => {
    if(id !== undefined) {
      dispatch({
        type: GET_ITEM_ONE_REQUEST,
        data: id
      })
    }
  },[id]);



  return (
      <>

        <Header />
        <div className="middle_space_screen" />
        {
          getItemOneDone && (
            <ItemDetail itemDetail={itemOne[0]}  />
          )
        }
        {/* <ItemImage /> */}
        {/* <Footer /> */}
      </>
  )
}



export default Item;