import React from 'react'

const ItemPost = ({item}) => {
  return (
    <div>
        <img src={item.Image[0]} />
        <img src={"https://photos.google.com/photo/AF1QipPli0Nl_-31a49GauoIa9iEraMR_CkgS1YiOMM9"} />
        <img src="https://photos.google.com/photo/AF1QipPli0Nl_-31a49GauoIa9iEraMR_CkgS1YiOMM9" alt='new'/>
        <p>{item.title}</p>
    </div>
  )
}

export default ItemPost