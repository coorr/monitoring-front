import React, { Component } from "react";
import Link from 'next/link'
import Header from "../components/header";
import { useSelector } from "react-redux";
import ItemPost from "../components/ItemPost";
import ss from '../images/ee.PNG'
import Image from 'next/image'


const index = () => {
  const { item } = useSelector((state) => state.item)

  return (
    <>
      <Header />
      <div style={{height:'200px'}}></div>
      {item.map((item) => <ItemPost key={item.id} item={item} />)}

      {/* <img src={item.Image[0]} /> */}
        <img src={"https://photos.google.com/photo/AF1QipPli0Nl_-31a49GauoIa9iEraMR_CkgS1YiOMM9"} />
        <Image src={ss} />
        {/* <Image src="https://photos.google.com/photo/AF1QipPli0Nl_-31a49GauoIa9iEraMR_CkgS1YiOMM9" alt='new'/> */}
        {/* <img src={require("https://photos.google.com/photo/AF1QipPli0Nl_-31a49GauoIa9iEraMR_CkgS1YiOMM9")} /> */}
        <p>{item.title}</p>
    </>
  )
}

export default index