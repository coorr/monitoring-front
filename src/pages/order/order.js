import React, { useState, useCallback, useEffect} from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import OrderHeader from '../../components/order/orderHeader';
import { Container, Row, Col, Card,ListGroup, Button } from 'react-bootstrap'
import styles from '../../components/css/Order.module.css'
import { BASKET_GET_REQUEST, IS_POST_OPEN_REQUEST, SOLD_OUT_BASKET_REQUEST } from '../../reducers/item';
import AuthService from '../../../service/user/Auth.service';
import OrderItem from '../../components/order/OrderItem';
import Footer from '../../components/Footer';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import useInput from '../../hooks/useInput'
import PostModel from '../../components/order/PostModel';
import { ORDER_SAVE_REQUEST } from '../../reducers/order';
import OrderService from '../../../service/order/Order.service';

const order = () => {
  const router = useRouter();
  const [deliveryBtn, setDeliveryBtn] = useState(false); 
  const [orderItemBtn, setOrderItemBtn] = useState(false); 
  const [infoBtn, setInfoBtn] = useState(false); 
  const [term, setTerm] = useState(false);
  const [dName, onChangeDName, setDName ] = useInput('');
  const [dEmail, onChangeDEmail, setDEmail ] = useInput('');
  const [domain, onChangeDomain, setDomain ] = useInput('naver.com');
  const [detailText, onChangeDetailText, setDetailText ] = useInput('');
  const [message, onChangeMessage, setMessage ] = useInput('');

  const dispatch = useDispatch();
  const [userId, setUserId] = useState('')
  const { currentItem, totalPrice, isOpenPost, roadNumber, address } = useSelector((state) => state.item) 


  useEffect(() => {
    const userLocalData = AuthService.getCurrentUser();

    if (userId === '' && userLocalData !== null) {
        setUserId(userLocalData.id);
        setDName(userLocalData.username);
    }
  }, [userId, dName ]);

  useEffect(() => {
    if(userId !== '') {
      OrderService.quantityCheckOrder(userId)
        .then(res => {
          if(res.data.message) {
            if(confirm(`현재 품절상품이 포함되어 있습니다. \n품절이 아닌 상품만 주문하시겠습니까?\n\n${res.data.message}`)) {
                dispatch({
                  type: SOLD_OUT_BASKET_REQUEST,
                  userId
                })
            } else {
                router.push("/basket")
            }
          } else {
            dispatch({
              type: BASKET_GET_REQUEST,
              userId: userId
          })
          }
        })
        .catch(err => {
          alert(err.response.data.message)
          return router.push("/basket")
        })
      }
  },[userId])
  
  const onClickDeliveryBtn = useCallback(() => {
      setDeliveryBtn(!deliveryBtn)
  },[deliveryBtn])

  const onClickOrderItemBtn = useCallback(() => {
      setOrderItemBtn(!orderItemBtn)
  }, [orderItemBtn])

  const onClickInfoBtn = useCallback(() => {
      setInfoBtn(!infoBtn)
  },[infoBtn])

  const onChangeOpenPost = useCallback(() => {
    dispatch({
      type: IS_POST_OPEN_REQUEST
    })
  })

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked)
  },[])

  


  const onClickOrderComplete = useCallback(() => {
    if(dName.length === 0) {
      return alert("수취자 성명 항목은 필수 입력값입니다.")
    } else if(roadNumber.length === 0) {
      return alert("기본주소 항목은 필수 입력값입니다.")
    } else if(detailText.length === 0) {
      return alert("나머지 주소 항목은 필수 입력값입니다.")
    } else if(dEmail.length === 0) {
      return alert("주문자 이메일 항목은 필수 입력값입니다.")
    } else if(!term) {
      return alert("결제정보 확인 및 구매진행에 동의하셔야 주문이 가능합니다.")      
    }

    const deliveryData = {
      name: dName,
      email: dEmail+"@"+domain,
      roadNumber: roadNumber,
      address: address,
      detailText: detailText,
      message: message,
    }

    dispatch({
      type: ORDER_SAVE_REQUEST,
      data: deliveryData,
      userId
    })
  })

  console.log(currentItem);

  return (
    <>
      <OrderHeader />
      <Container style={{maxWidth: '850px' }}>
         <Row>
           <Col xs={24} md={24} style={{fontSize : '14px'}}>
              <br />
                <div className="form-group">
                <button onClick={onClickDeliveryBtn} style={{border: 0, backgroundColor: 'white', width: '100%'}}>
                    <label style={{fontSize: '18px', float: 'left'}} >배송지</label>
                    <span style={{float: 'right'}}>{ !deliveryBtn ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}</span>
                 <br />
                 <div className="form-control" />
               </button>
                </div>

                <br />
              { !deliveryBtn && (
                <>
                  <div className="form-group" style={{display: 'flex'}}>
                    &nbsp;&nbsp;
                    <label style={{width: '110px'}} >받는 사람 <span style={{color: '#42a5f5'}}>*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id={styles.order_delivery}
                        value={dName} 
                        onChange={onChangeDName}
                    />
                </div>
                <br />
                <div className="form-group" style={{display: 'flex'}}>
                    &nbsp;&nbsp;
                    <label style={{width: '110px'}} >주소 <span style={{color: '#42a5f5'}}>*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id={styles.order_delivery_short}
                        defaultValue={roadNumber}
                        disabled
                    />&nbsp;&nbsp;
                    <button onClick={onChangeOpenPost} style={{border: '1px solid black', backgroundColor:'white', color: 'black'}}>주소 검색</button>
                    {isOpenPost  && (
                        <PostModel show={isOpenPost} onHide={onChangeOpenPost} />
                        // <DaumPostcode style={styles.postCodeStyle} autoClose onComplete={onCompletePost } />
                    )}
                </div>
                <br />
                <div className="form-group" style={{display: 'flex'}}>
                    &nbsp;&nbsp;
                    <label style={{width: '110px'}} ></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id={styles.order_delivery}
                        defaultValue={address}
                        disabled
                    />
                </div>
                <br />
                <div className="form-group" style={{display: 'flex'}}>
                    &nbsp;&nbsp;
                    <label style={{width: '110px'}} ></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id={styles.order_delivery}
                        value={detailText}
                        onChange={onChangeDetailText}
                    />
                </div>
                <br />
                <div className="form-group" style={{display: 'flex'}}>
                    &nbsp;&nbsp;
                    <label style={{width: '110px'}} >이메일 <span style={{color: '#42a5f5'}}>*</span></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id={styles.order_delivery_short_email}
                        value={dEmail}
                        onChange={onChangeDEmail}
                    />
                    &nbsp;<span>@</span>&nbsp;
                    <select defaultValue={domain} onChange={onChangeDomain} style={{width: '300px'}} >
                      <option value="naver.com">naver.com</option>
                      <option value="nate.com">nate.com</option>
                      <option value="gmail.com">gmail.com</option>
                      <option value="daum.com">daum.com</option>
                    </select>
                </div>
                <br />
                <select value={message} onChange={onChangeMessage} style={{width: '100%', fontSize: '14px', padding: '5px'}}>
                  <option>--메세지 선택(선택사항)--</option>
                  <option value="배송 전에 미리 연락바랍니다.">배송 전에 미리 연락바랍니다.</option>
                  <option value="부재 시 경비실에 맡겨주세요.">부재 시 경비실에 맡겨주세요.</option>
                  <option value="부재 시 문 앞에 놓아주세요.">부재 시 문 앞에 놓아주세요.</option>
                  <option value="빠른 배송 부탁드립니다.">빠른 배송 부탁드립니다.</option>
                  <option value="택배함에 보관해 주세요.">택배함에 보관해 주세요.</option>
                </select>
                <br /><br />
                </>
              )}
              
            

             
              <div className="form-group">
                <button onClick={onClickOrderItemBtn} style={{border: 0, backgroundColor: 'white', width: '100%'}}>
                      <label style={{fontSize: '18px', float: 'left'}} >주문 상품</label>
                      <span style={{float: 'right'}}>{ !orderItemBtn ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}</span>
                  <br />
                  <div className="form-control" />
                </button>
                { !orderItemBtn && (
                  <>
                  { currentItem.map((item,i) => <OrderItem key={item.keyIndex} item={item} />)} 
                  <br /><br />
                  </>
                )}
              </div>
              <br />

              
              <div className="form-group">
                  <button onClick={onClickInfoBtn} style={{border: 0, backgroundColor: 'white', width: '100%'}}>
                        <label style={{fontSize: '18px', float: 'left'}} >결제 정보</label>
                        <span style={{float: 'right'}}>{ !infoBtn ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}</span>
                    <br />
                    <div className="form-control" />
                  </button>
              </div>  
                
                  { !infoBtn && (
                    <>
                     <br/>
                     <div className="form-group" style={{textAlign:"center", fontSize: "15px" }}>
                      <div style={{display: "inline-block", width:"80%", color: "rgb(121, 121, 121)"}}>
                          <span style={{float: "left"}}>주문상품</span>
                          <span style={{float: 'right'}}>{totalPrice.toLocaleString('ko-KR')} 원</span><br/>
                          <span style={{float: "left"}}>배송비</span>
                          <span style={{float: 'right'}}>0 원</span><br/><br/>
                          <span style={{float: "left", color: "black"}}>결제금액</span>
                          <span style={{float: 'right', color: "black"}}>{totalPrice.toLocaleString('ko-KR')} 원</span>
                      </div>
                    </div>
                    </>
                  )}
              

              <br /><br />
              <div className="form-group">
                  <label style={{fontSize: '15px'}}  >약관 동의</label>
                  <div className="form-control" id={styles.orderAssignment} />
                  <br />
                  &nbsp;&nbsp;
                  <input type="checkbox" id="check1" checked={term} onChange={onChangeTerm} />
                  <label style={{fontSize: '15px', color: "rgb(121, 121, 121)" }} >
                    <span style={{fontSize: '17px',  color: 'black'}}>[필수]</span>
                    구매조건 확인 및 결제진행 동의
                  </label>
              </div>
              <br /><br />
              <Button onClick={onClickOrderComplete}>{totalPrice.toLocaleString('ko-KR')}원 결제하기</Button>
           </Col>
         </Row>
      </Container>
      <Footer />
    </>
  )
}

export default order