import React, { useState, useCallback, useEffect} from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import OrderHeader from '../../components/order/orderHeader';
import { Container, Row, Col, Card,ListGroup, Button } from 'react-bootstrap'
import styles from '../../components/css/Order.module.css'
import { BASKET_GET_REQUEST } from '../../reducers/item';
import AuthService from '../../../service/user/Auth.service';
import OrderItem from '../../components/order/OrderItem';
import Footer from '../../components/Footer';

const order = () => {
  const router = useRouter();
  const [deliveryBtn, setDeliveryBtn] = useState(false); 
  const [orderItemBtn, setOrderItemBtn] = useState(false); 
  const [infoBtn, setInfoBtn] = useState(false); 
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('')
  const { currentItem, totalPrice } = useSelector((state) => state.item) 


  useEffect(() => {
    const userLocalData = AuthService.getCurrentUser();

    if (userId === '' && userLocalData !== null) {
        setUserId(userLocalData.id);
    }
  }, [userId]);

  useEffect(()=> {
    if(userId !== '') {
        dispatch({
            type: BASKET_GET_REQUEST,
            userId: userId
        })
    }
  },[userId])
  
  console.log(currentItem);

  return (
    <>
      <OrderHeader />
      <Container style={{maxWidth: '850px' }}>
         <Row>
           <Col style={{fontSize : '14px'}}>
             <div>
              <br />
              
              <button style={{border: 0, backgroundColor: 'white', width: '100%'}}>
                <div className="form-group">
                   
                    <label style={{fontSize: '18px'}} >배송지</label>
                    <div className="form-control" />
                    
                </div>
              </button>
              
              <br />
              <div className="form-group" style={{display: 'flex'}}>
                  &nbsp;&nbsp;
                  <label style={{width: '100px'}} >받는 사람 <span style={{color: '#42a5f5'}}>*</span></label>
                  <input 
                      type="text" 
                      className="form-control" 
                      value={"kim"} 
                      id={styles.order_delivery}
                  />
              </div>
              <br />
              <div className="form-group" style={{display: 'flex'}}>
                  &nbsp;&nbsp;
                  <label style={{width: '100px'}} >주소 <span style={{color: '#42a5f5'}}>*</span></label>
                  <input 
                      type="text" 
                      className="form-control" 
                      id={styles.order_delivery_short}
                  />&nbsp;&nbsp;
                  <button style={{border: '1px solid black', backgroundColor:'white', color: 'black'}}>주소 검색</button>
              </div>
              <br />
              <div className="form-group" style={{display: 'flex'}}>
                  &nbsp;&nbsp;
                  <label style={{width: '100px'}} ></label>
                  <input 
                      type="text" 
                      className="form-control" 
                      id={styles.order_delivery}
                  />
              </div>
              <br />
              <div className="form-group" style={{display: 'flex'}}>
                  &nbsp;&nbsp;
                  <label style={{width: '100px'}} ></label>
                  <input 
                      type="text" 
                      className="form-control" 
                      id={styles.order_delivery}
                  />
              </div>
              <br />
              <div className="form-group" style={{display: 'flex'}}>
                  &nbsp;&nbsp;
                  <label style={{width: '100px'}} >이메일 <span style={{color: '#42a5f5'}}>*</span></label>
                  <input 
                      type="text" 
                      className="form-control" 
                      id={styles.order_delivery_short_email}
                      value={"wlsdiqkdrk"}
                  />
                  &nbsp;<span>@</span>&nbsp;
                  <select style={{width: '300px'}} disabled>
                    <option>naver.com</option>
                  </select>
              </div>
              <br />
              <select style={{width: '830px', fontSize: '14px', padding: '5px'}}>
                <option>--메세지 선택(선택사항)--</option>
              </select>
             </div>

             <br /><br />
              <div className="form-group">
                  <label style={{fontSize: '18px'}} >주문 상품</label>
                  <div className="form-control" />
                  {currentItem.map((item,i) => <OrderItem key={item.keyIndex} item={item} />)}  
              </div>

              <br /><br />
              <div className="form-group">
                  <label style={{fontSize: '18px'}} >결제 정보</label>
                  <div className="form-control" />
                  <br />
                  <div className="form-group" style={{textAlign:"center", fontSize: "15px" }}>
                        <div style={{display: "inline-block", width:"750px", color: "rgb(121, 121, 121)"}}>
                            <span style={{float: "left"}}>주문상품</span>
                            <span style={{float: 'right'}}>{totalPrice.toLocaleString('ko-KR')} 원</span><br/>
                            <span style={{float: "left"}}>배송비</span>
                            <span style={{float: 'right'}}>0 원</span><br/><br/>
                            <span style={{float: "left", color: "black"}}>결제금액</span>
                            <span style={{float: 'right', color: "black"}}>{totalPrice.toLocaleString('ko-KR')} 원</span>
                        </div>
                    </div>
              </div>

              <br /><br />
              <div className="form-group">
                  <label style={{fontSize: '15px'}}  >약관 동의</label>
                  <div className="form-control" id={styles.orderAssignment} />
                  <br />
                  &nbsp;&nbsp;
                  <input type="checkbox" id="check1" />
                  <label for="check1"></label>&nbsp;
                  <label style={{fontSize: '15px', color: "rgb(121, 121, 121)" }} >
                    <span style={{fontSize: '17px',  color: 'black'}}>[필수]</span>
                    구매조건 확인 및 결제진행 동의
                  </label>
              </div>
              <br /><br />
              <Button>{totalPrice.toLocaleString('ko-KR')}원 결제하기</Button>
           </Col>
         </Row>
      </Container>
      <Footer />
    </>
  )
}

export default order