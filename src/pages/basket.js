import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/header'
import { Container, Row, Col, Card,ListGroup, Button } from 'react-bootstrap'
import styles from '../components/css/Product.module.scss'
import ItemService from '../../service/item/Item.service'
import DeleteIcon from '../images/btn_price_delete.gif'
import Image from 'next/image';
import Footer from '../components/Footer'

const basket = () => {
  const dispatch = useDispatch();
  const [localItem, setLocalItem] = useState(false);
  


  useEffect(() => {
    const jsonItems = ItemService.getCurrentItem();

    if (!localItem && jsonItems !== null) {
          setLocalItem(jsonItems);
    }
  }, [localItem]);

  const onClickBasketRemove = useCallback((keyIndex) => () => {
    const localRecentProduct = JSON.parse(localStorage.getItem('localRecentProduct'));
    if(localRecentProduct !== null) {
        const basketRemove = localRecentProduct.filter((v) => v.keyIndex !== keyIndex)
        localStorage.setItem("localRecentProduct", JSON.stringify(basketRemove));
        setLocalItem(basketRemove)
    } 
  },[localItem])

  const onClickBasketDown = useCallback((keyIndex) => () => {
    const localRecentProduct = JSON.parse(localStorage.getItem('localRecentProduct'));
    if(localRecentProduct !== null) {
        const basketRemove = localRecentProduct.find((v) => v.keyIndex === keyIndex)
        if(basketRemove.itemCount === 1) {
            return alert("최소 주문수량은 1개 입니다.")
        }
        basketRemove.itemCount = basketRemove.itemCount - 1
        basketRemove.itemTotal = basketRemove.itemTotal - basketRemove.price
        localStorage.setItem("localRecentProduct", JSON.stringify(localRecentProduct));
        setLocalItem(localRecentProduct)
    } 
  },[localItem])

  const onClickBasketPlus = useCallback((keyIndex) => () => {
    const localRecentProduct = JSON.parse(localStorage.getItem('localRecentProduct'));
    if(localRecentProduct !== null) {
        const basketRemove = localRecentProduct.find((v) => v.keyIndex === keyIndex)
        // 주문량 조건 달기
        basketRemove.itemCount = basketRemove.itemCount + 1
        basketRemove.itemTotal = basketRemove.itemTotal + basketRemove.price
        localStorage.setItem("localRecentProduct", JSON.stringify(localRecentProduct));
        setLocalItem(localRecentProduct)
    } 
  },[localItem])

  console.log(localItem);
  
  return (
      <>
      {/* <Header /> */}
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
            localItem.length > 0 ? (
                <>       

                    {
                        localItem.map((v,i) => (
                          <div key={v.keyIndex} >
                          <br />
                            <Card style={{flexDirection:'row'}} key={v.itemId}>
                                <Card.Img 
                                src={v.image ? `http://localhost:8080/static/${v.image}` : undefined }
                                height={110}
                                style={{width: "13%", margin: 0}}
                                />
                                <Card.Body id={styles.basket_body_text}>
                                    <Card.Title style={{ fontSize: '14px', paddingBottom: '1px' }}>
                                        {v.title}
                                        <button 
                                            className={styles.item_add_remove_btn}  
                                            style={{float: 'right', color: '#9A9A9A'}}
                                            onClick={onClickBasketRemove(v.keyIndex)}
                                        >
                                            <Image src={DeleteIcon} />
                                        </button>
                                        <span style={{float: 'right', marginRight: '100px'}}>{v.itemTotal.toLocaleString('ko-KR')}원</span>
                                    </Card.Title>
                                    <Card.Title style={{ fontSize: '14px', paddingBottom: '3px' }}>
                                        <span>[옵션:{v.size}]</span>
                                    </Card.Title>
                                    <button style={{backgroundColor: "white", border:"1px solid black", fontSize: '12px'}}>옵션변경</button>
                                    <div>
                                        <button onClick={onClickBasketDown(v.keyIndex)} className={styles.item_add_remove_btn}>-</button>
                                        <span>{v.itemCount}</span>
                                        <button onClick={onClickBasketPlus(v.keyIndex)} className={styles.item_add_remove_btn}>+</button>
                                    </div>
                                </Card.Body>
                            </Card>
                           <br />
                           </div>
                        ))
                    }
                    <div style={{borderBottom: '1px solid black'}} />
                    <br/>
                    <div className="form-group" style={{textAlign:"center", fontSize: "14px" }}>
                        <div style={{display: "inline-block", width:"500px"}}>
                            <span style={{float: "left"}}>상품구매금액</span><span style={{float: 'right'}}>780,000 원</span><br/>
                            <span style={{float: "left"}}>배송비</span><span style={{float: 'right'}}>0 원</span><br/><br/>
                            <span style={{float: "left", color: "#a8a8a8"}}>할인</span><span style={{float: 'right', color: "#a8a8a8"}}>78,000 원</span><br/><br/>
                            <span style={{float: "left"}}>결제예정금액</span><span style={{float: 'right'}}>780,000 원</span><br/><br/><br/>
                        </div>
                    </div>

                    <Button className={styles.basket_order_btn_null}>장바구니 비우기</Button>
                    <Button className={styles.basket_order_btn_order}>주문하기</Button>


                       
            </>
          ) : (
            <div style={{textAlign: 'center'}}>
                <br/><br/>
                <div style={{borderBottom: '1px solid black'}} />
                    <br/><br/><br/>
                        <span style={{fontSize: "14px", color: "#707070"}}>장바구니가 비어 있습니다.</span>
                    <br/><br/>
                    <br/><br/>
                <div style={{borderBottom: '1px solid black'}} />
            </div>
          )
      }
         
            </Col>
        </Row>
    </Container>
    <Footer />
      </>
  )
}

export default basket