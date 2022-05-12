import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { Container, Row, Col, Card,ListGroup, Button } from 'react-bootstrap'
import styles from '../components/css/Product.module.scss'
import DeleteIcon from '../images/btn_price_delete.gif'
import Image from 'next/image';
import Footer from '../components/Footer'
import AuthService from '../../service/user/Auth.service'
import ItemService from '../../service/item/Item.service'
import { BASKET_DOWN_USER_REQUEST, BASKET_EMPTY_REQUEST, BASKET_GET_REQUEST, 
    BASKET_LOCAL_ADD_REQUEST,  BASKET_PLUS_USER_REQUEST, BASKET_REMOVE_USER_REQUEST } from '../reducers/item'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { location } from '../config/location'

const basket = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('')
  const { currentItem, totalPrice } = useSelector((state) => state.item) 


  useEffect(() => {
    const userLocalData = AuthService.getCurrentUser();
    const itemLocalData = ItemService.getCurrentItem();

    if (userId === '' && userLocalData !== null) {
        setUserId(userLocalData.id);
        dispatch({
            type: BASKET_GET_REQUEST,
            userId: userLocalData.id
        })
    }

    if(itemLocalData !== null) {
        dispatch({
            type: BASKET_LOCAL_ADD_REQUEST,
            data: itemLocalData
        })
    }
   
    console.log("basket useEffect");
  }, [userId]);

//   useEffect(()=> {
//     if(userId !== '') {
//         dispatch({
//             type: BASKET_GET_REQUEST,
//             userId: userId
//         })
//     }
//   },[userId])
  console.log("currentItem : ", currentItem)

  

  const onClickBasketRemove = useCallback((keyIndex) => () => {
    if(confirm("선택하신 상품을 삭제하시겠습니까?")) {
        if(userId !== '') {
            dispatch({
                type: BASKET_REMOVE_USER_REQUEST,
                data: keyIndex,
                userId
            })
            window.location.reload();
        } else {
            const localRecentProduct = JSON.parse(localStorage.getItem('localRecentProduct'));
            if(localRecentProduct !== null) {
                const basketRemove = localRecentProduct.filter((v) => v.keyIndex !== keyIndex)
                localStorage.setItem("localRecentProduct", JSON.stringify(basketRemove));
                const localRecentProducts = JSON.parse(localStorage.getItem('localRecentProduct'));
                if(localRecentProducts.length === 0) {
                    localStorage.setItem("localRecentProduct", JSON.stringify(null));
                }
                dispatch({
                    type: BASKET_LOCAL_ADD_REQUEST,
                    data: basketRemove,
                })
                window.location.reload();
            } 
        }
    } else { return; }
  })

  const onClickBasketDown = useCallback((keyIndex) => () => {
      if(userId !== ''){
        const sameKeyCountOne = currentItem.find(v => v.keyIndex === keyIndex)
        if(sameKeyCountOne.itemCount === 1) {
            return alert("최소 주문수량은 1개입니다.")
        }
        dispatch({
            type: BASKET_DOWN_USER_REQUEST,
            data: keyIndex,
            userId
        })
      } else {
        const localRecentProduct = JSON.parse(localStorage.getItem('localRecentProduct'));
        if(localRecentProduct !== null) {
            const basketDown = localRecentProduct.find((v) => v.keyIndex === keyIndex)
            if(basketDown.itemCount === 1) {
                return alert("최소 주문수량은 1개 입니다.")
            }
            basketDown.itemCount = basketDown.itemCount - 1
            basketDown.itemTotal = basketDown.itemTotal - basketDown.price
            localStorage.setItem("localRecentProduct", JSON.stringify(localRecentProduct));
            dispatch({
                type: BASKET_LOCAL_ADD_REQUEST,
                data: localRecentProduct
            })
        } 
      }
  })

  const onClickBasketPlus = useCallback((keyIndex) => () => {
    if(userId !== ''){
        dispatch({
            type: BASKET_PLUS_USER_REQUEST,
            data: keyIndex,
            userId
        })
      } else {
        const localRecentProduct = JSON.parse(localStorage.getItem('localRecentProduct'));
        if(localRecentProduct !== null) {
            const basketPlus = localRecentProduct.find((v) => v.keyIndex === keyIndex)
            basketPlus.itemCount = basketPlus.itemCount + 1
            basketPlus.itemTotal = basketPlus.itemTotal + basketPlus.price
            localStorage.setItem("localRecentProduct", JSON.stringify(localRecentProduct));
            dispatch({
                type: BASKET_LOCAL_ADD_REQUEST,
                data: localRecentProduct
            })
        } 
      }
    
  })

  const onClickBasketEmpty = useCallback(() => {
      if(confirm("장바구니 비우시겠습니까?")) {
        if(userId !== '') {
            dispatch({
                type: BASKET_EMPTY_REQUEST,
                userId
            })
        } else {
            dispatch({
                type: BASKET_LOCAL_ADD_REQUEST,
                data: []
            })
          localStorage.setItem("localRecentProduct", JSON.stringify(null));
          window.location.reload();
        }
      } else {
          return;
      }
  })

  const onClickOrderPage = useCallback(() => {
      if(userId === '') {
        return router.push("/user/login")
      }
      router.push("/order/order")
  })

  
  return (
      <>
      <Header />
        <div className="middle_space_screen" />
        <Container style={{maxWidth: '720px'}}>
            <Row>
                <Col xs={12} md={12}>
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
            currentItem.length > 0 ? (
                <>       

                    {
                        currentItem.map((v,i) => (
                          <div key={v.keyIndex} >
                          <br />
                            <Card style={{flexDirection:'row'}} key={v.itemId}>
                                <Card.Img 
                                src={v.image ? location+`${v.image[0].location}` : undefined }
                                height={110}
                                style={{width: "13%", margin: 0}}
                                />
                                <Card.Body id={styles.basket_body_text}>
                                    <Card.Title style={{ fontSize: '14px', paddingBottom: '1px' }}>
                                       <Link href={`/item/${v.itemId}`}><a >{v.title}</a></Link>
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
                                        <span>[옵션: {v.size}]</span>
                                    </Card.Title>
                                    <br />
                                    {/* <button style={{backgroundColor: "white", border:"1px solid black", fontSize: '12px'}}>옵션변경</button> */}
                                    <div>
                                        <button onClick={onClickBasketDown(v.keyIndex)} className={styles.item_add_remove_btn}>-</button>&nbsp;
                                        <span style={{fontSize : "12px"}}>{v.itemCount}</span>&nbsp;
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
                        <div style={{display: "inline-block", width:"70%"}}>
                            <span style={{float: "left"}}>상품구매금액</span><span style={{float: 'right'}}>{totalPrice.toLocaleString('ko-KR')} 원</span><br/>
                            <span style={{float: "left"}}>배송비</span><span style={{float: 'right'}}>0 원</span><br/><br/>
                            <span style={{float: "left"}}>결제예정금액</span><span style={{float: 'right'}}>{totalPrice.toLocaleString('ko-KR')} 원</span><br/><br/><br/>
                        </div>
                    </div>

                    <Button onClick={onClickBasketEmpty} className={styles.basket_order_btn_null}>장바구니 비우기</Button>
                    <Button onClick={onClickOrderPage}className={styles.basket_order_btn_order}>주문하기</Button>  
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
       <br />
       <br />
       <div style={{fontSize: "11px"}}>
        <span>장바구니 이용안내</span><br/>
        <div style={{color: "#797979"}}>
            <span>1. 선택하신 상품의 수량을 변경하면 자동으로 반영됩니다.</span><br/>  
            <span>2. 장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나 관심상품으로 등록하실 수 있습니다.</span>  <br/>
            <span>3. 파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에 업로드 한 파일로 교체됩니다.</span>  <br/>
            <span>4. [주문하기] 버튼을 누르시면 장바구니의 구분없이 선택된 모든 상품에 대한 주문/결제가 이루어집니다.</span>  <br/>   
        </div>
      </div>
         
            </Col>
        </Row>
    </Container>
    <Footer />
      </>
  )
}

export default basket