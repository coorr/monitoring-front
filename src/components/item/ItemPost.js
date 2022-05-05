import React, {memo, useCallback, useState} from 'react'
import { Card } from "react-bootstrap";
import { useRouter } from 'next/router';
import Link from 'next/link'
import { location } from '../../config/location';

const ItemPost = ({item}) => {
  const [over, setOver] = useState(false);
  const router = useRouter();
  console.log(item);

  return (
    <div>
        <Card >
        <Link href={`/item/${item.itemId}`}>
        <a>
          <Card.Img 
          variant="top" 
          // src={over &&item.Image[1] !== undefined ? item.Image[1].src : item.Image[0].src}
          src={item.images.length > 0 ? location+`${item.images[0].location}` : undefined  }
          // src={item.images.length > 0 ? "https://shopping-back-s3.s3.ap-northeast-2.amazonaws.com/2e657d86-3f5b-4bc9-be5f-45c0d263f686.PNG" : undefined  }
          onMouseOver={e => setOver(true)}
          onMouseOut={e => setOver(false)}
          height={430}
          />
        </a>
        </Link>
          <Card.Body>
          <Link href={`/item/${item.itemId}`}>
            <a>
              <Card.Title style={{ fontSize: '10px' }}>
                {item.title}
              </Card.Title>
            </a>
          </Link>
              <Card.Title style={{ fontSize: '10px', textDecoration : 'line-through' }}>
                {item.price.toLocaleString('ko-KR')}원
              </Card.Title>
              <Card.Text style={{ fontSize: '10px' }}>
                {item.discount_price.toLocaleString('ko-KR')}원
              </Card.Text>
              <br />
          </Card.Body>
        </Card>
    </div>
  )
}

export default memo(ItemPost)