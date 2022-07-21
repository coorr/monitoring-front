import Head from 'next/head';
import {  useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ItemDetail from '../../components/item/ItemDetail';
import { GET_ITEM_ONE_REQUEST } from '../../reducers/item';

const Item = () =>  {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const { itemOne, getItemOneDone  } = useSelector((state) => state.item);

  useEffect(() => {
    console.log(router);
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
          <Head>
            {
              getItemOneDone && (
                <>
                <title>
                  {itemOne.title}
                </title>
                <meta name='description' content={itemOne.size} />
                <meta property='og:title'  content={itemOne.title} />
                <meta property='og:description'  content={itemOne.title} />
                <meta property='og:title'  content={itemOne.size} />
                <meta property='og:image'  content={itemOne.images  ? itemOne.images.location : null} />
                <meta property='og:url'  content={`https://lookshop.cf/item/${id}`} />
                </>
              )
            }
            
          </Head>
        <div className="middle_space_screen" />
        {
          getItemOneDone && (
            <ItemDetail itemDetail={itemOne}  />
          )
        }
        <Footer />
      </>
  )
}



export default Item;