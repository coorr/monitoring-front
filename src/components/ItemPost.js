import React, {useState} from 'react'
import Image from 'next/image'
import ss from '../images/ee.png'
import { Card, Button } from "react-bootstrap";

const ItemPost = ({item}) => {
  const [over, setOver] = useState(false);
  console.log(item)
  return (
    <div>
        <Card >
          {/* <Card.Img 
          variant="top" 
          src={over &&item.Image[1] !== undefined ? item.Image[1].src : item.Image[0].src}
          onMouseOver={e => setOver(true)}
          onMouseOut={e => setOver(false)}
          height={430}
          /> */}
          
          <Card.Body>
            <Card.Title style={{ fontSize: '10px' }}>{item.title}</Card.Title>
              <Card.Title style={{ fontSize: '10px', textDecoration : 'line-through' }}>
                {item.price}원<br />
              </Card.Title>
              <Card.Text style={{ fontSize: '10px' }}>
                {item.discountPrice}원
              </Card.Text>
              <br />
          </Card.Body>
        </Card>
    </div>
  )
}

export default ItemPost