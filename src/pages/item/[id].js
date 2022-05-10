import Head from 'next/head';
import {  useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/header';
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
                    {itemOne[0].title}
                  </title>
                  <meta name='description' content={itemOne[0].size} />
                  <meta property='og:title'  content={itemOne[0].title} />
                  <meta property='og:description'  content={itemOne[0].title} />
                  <meta property='og:title'  content={itemOne[0].size} />
                  <meta property='og:image'  content={itemOne[0].images ? itemOne[0].images[0].location : null} />
                  <meta property='og:url'  content={`https://lookshop.cf/item/${id}`} />
                  </>
              )
            }
            
          </Head>
        <div className="middle_space_screen" />
        {
          getItemOneDone && (
            <ItemDetail itemDetail={itemOne[0]}  />
          )
        }
        <Footer />
      </>
  )
}



export default Item;