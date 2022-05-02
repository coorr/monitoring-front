import React from 'react'
import { Container, Row, Col, Card,ListGroup, Button } from 'react-bootstrap'
import styles from '../../components/css/Product.module.scss'
import DeleteIcon from '../../images/btn_price_delete.gif'
import Image from 'next/image';

const OrderItem = ({item}) => {
    console.log(item);
  return (
    <div>
    <br />
    <Card style={{flexDirection:'row'}} >
        <Card.Img 
        src={item.image ? `http://localhost:8080/static/${item.image[0].location}` : undefined }
        height={110}
        style={{width: "13%", margin: 0}}
        />
        <Card.Body id={styles.basket_body_text}>
            <Card.Title style={{ fontSize: '15px'}}>
                {item.title}
                <button 
                    className={styles.item_add_remove_btn}  
                    style={{float: 'right', color: '#9A9A9A'}}
                    // onClick={onClickBasketRemove(item.keyIndex)}
                >
                    <Image src={DeleteIcon} />
                </button>
                
            </Card.Title>
            <Card.Title style={{ fontSize: '14px', paddingBottom: '3px', color: "rgb(121, 121, 121)", lineHeight: 1.5}}>
                <span>[옵션: {item.size}]</span><br />
                <span>수량: {item.itemCount}개</span><br/>
                <span>상품구매금액: {item.itemTotal.toLocaleString('ko-KR')}원</span><br />
                <span>[무료] / 기본배송</span>
            </Card.Title>
        </Card.Body>
    </Card>
    <br />
    </div>
  )
}

export default OrderItem