import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/header'
import { Container, Row, Col, Card,ListGroup } from 'react-bootstrap'
import styles from '../components/css/Product.module.scss'
import ItemService from '../../service/item/Item.service'
import DeleteIcon from '../images/btn_price_delete.gif'
import Image from 'next/image';

const basket = () => {
  const dispatch = useDispatch();
  const [localItem, setLocalItem] = useState('');
//   const [avoidReading, setAvoidReading] = useState(false);
const test = [{ data:1, ts: 2},{ data:1, ts: 2}]
  
  const { currentItem } = useSelector((state) => state.item);


  useEffect(() => {
    if (!localItem.length) {
    //   const jsonItems = localStorage.getItem("localRecentProduct");
      const jsonItems = ItemService.getCurrentItem();
    //   const localItems = JSON.parse(jsonItems);
      setLocalItem(jsonItems);
    }
  }, [localItem]);

  console.log(localItem);
  return (
      <>
        <Header />
        <div className="middle_space_screen" />
        <Container style={{maxWidth: '720px'}}>
            <Row>
                <Col>
                    <span style={{display: 'flex', fontSize: '14px'}}>장바구니</span>
                    <div style={{borderBottom: '1px solid black'}} />


                        <ListGroup horizontal="sm" style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <ListGroup.Item className={styles.basket_order_text_bold}>장바구니</ListGroup.Item>
                            <ListGroup.Item>▶</ListGroup.Item>
                            <ListGroup.Item>주문서작성</ListGroup.Item>
                            <ListGroup.Item>▶</ListGroup.Item>  
                            <ListGroup.Item>결제완료</ListGroup.Item>
                            <ListGroup.Item>▶</ListGroup.Item>
                            <ListGroup.Item>주문완료</ListGroup.Item>
                        </ListGroup>
                    <div style={{borderBottom: '1px solid black'}} />
                    
                    

                    {
                        localItem && localItem.map((v,i) => (
                            <>
                            <br/>
                            <Card style={{flexDirection:'row'}}>
                                <Card.Img 
                                src={v.image && `http://localhost:8080/static/${v.image}`  }
                                height={110}
                                style={{width: "13%", margin: 0}}
                                />
                                <Card.Body id={styles.basket_body_text}>
                                    <Card.Title style={{ fontSize: '14px', paddingBottom: '1px' }}>
                                        {v.title}
                                        <span style={{float: 'right', color: '#9A9A9A'}}>X</span>
                                        <span style={{float: 'right', marginRight: '100px'}}>{v.itemTotal.toLocaleString('ko-KR')}원</span>
                                    </Card.Title>
                                    <Card.Title style={{ fontSize: '14px', paddingBottom: '3px' }}>
                                        <span>[옵션:{v.size}]</span>
                                    </Card.Title>
                                    <button style={{backgroundColor: "white", border:"1px solid black", fontSize: '12px'}}>옵션변경</button>
                                    <div>
                                        <button className={styles.item_add_remove_btn}>-</button>
                                        <span>{v.itemCount}</span>
                                        <button  className={styles.item_add_remove_btn}>+</button>
                                        <button  className={styles.item_add_remove_btn}><Image src={DeleteIcon} /></button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <br />
                            </>
                        ))
                    }

                    

                </Col>
            </Row>
        </Container>
      </>
  )
}

export default basket