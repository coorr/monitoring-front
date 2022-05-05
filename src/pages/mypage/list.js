import React, { useState, useEffect, useCallback } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import { Container, Row, Col, Card,ListGroup, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import styles from '../../components/css/Page.module.css'
import AuthService from '../../../service/user/Auth.service';
import { CANCEL_ORDER_REQUEST, GET_ORDER_ALL_REQUEST } from '../../reducers/order';
import Moment from 'moment';
import Image from 'next/image';

const curretTime = new Date(new Date().getTime() - 7889400000);
const format = "YYYY.MM.DD";
const changeFormat = "YYYYMMDD000000";

const list = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('')
  const [timeControl, setTimeControl] = useState(["오늘", "1개월", "3개월"])
  const [timeOne, setTimeOne] = useState("3개월");
  const [endDate, setEndDate] = useState( Moment(curretTime, format).format(changeFormat));

  const { orderList } = useSelector((state) => state.order);

  useEffect(() => {
    const userLocalData = AuthService.getCurrentUser();

    if (userId === '' && userLocalData !== null) {
        setUserId(userLocalData.id);
    }
  }, [userId]);

  useEffect(() => {
    if(userId !== '') {
        dispatch({
            type: GET_ORDER_ALL_REQUEST,
            userId,
            startDate: Moment(new Date(), format).format(changeFormat),
            endDate: endDate
        })
    }
},[userId])

  const onClickTimeControl = useCallback((e) => {
      console.log(new Date());
      console.log(new Date(new Date().getTime() - 7889400));
    setTimeOne(e.target.value)
    
    if(e.target.value === "오늘") {
        setEndDate(Moment(new Date(), format).format(changeFormat))
        dispatch({
            type: GET_ORDER_ALL_REQUEST,
            userId,
            startDate: Moment(new Date(), format).format(changeFormat),
            endDate: Moment(new Date(), format).format(changeFormat)
        })
    } else if(e.target.value === "1개월") {
        const newTime = new Date(new Date().getTime() - 2629800000);
        setEndDate(Moment(newTime, format).format(changeFormat))
        dispatch({
            type: GET_ORDER_ALL_REQUEST,
            userId,
            startDate: Moment(new Date(), format).format(changeFormat),
            endDate: Moment(newTime, format).format(changeFormat)
        })
    } else if(e.target.value === "3개월") {
        const newTime = new Date(new Date().getTime() - 7889400000);
        setEndDate(Moment(newTime, format).format(changeFormat))
        dispatch({
            type: GET_ORDER_ALL_REQUEST,
            userId,
            startDate: Moment(new Date(), format).format(changeFormat),
            endDate: Moment(newTime, format).format(changeFormat)
        })
    } 
  },[userId, timeOne, endDate])

  const onClickOrderCancel = useCallback((orderId) => () => {
      if(confirm("주문취소 하시겠습니까?\n반복적인 주문취소는 주문제한 사유가 될 수 있습니다.")) {
        dispatch({
            type: CANCEL_ORDER_REQUEST,
            orderId,
            startDate: Moment(new Date(), format).format(changeFormat),
            endDate
        })
      } else { return; }
        
  },[endDate])
  
  console.log(orderList);

  return (
    <>
      <Header />
      <div className="middle_space_screen" />
        <Container style={{maxWidth: '820px'}}>
            <Row>
                <Col>
                    <span style={{display: 'flex', fontSize: '14px'}}>주문조회</span>
                    <select style={{padding: '3px', fontSize : '13px'}}>
                        <option>전체 주문처리상태</option>
                        <option>배송준비중</option>
                        <option>배송완료</option>
                        <option>취소</option>
                    </select>&nbsp;&nbsp;
                    { timeControl.map((v) => (
                        <button 
                            key={v}
                            onClick={onClickTimeControl}  
                            className={v === timeOne ? styles.time_control_on : styles.time_control_off }
                            value={v}
                            
                        >   
                            {v}
                        </button>
                    ))}
                    <div style={{borderBottom: '1px solid black', marginTop: '8px'}} />
                    
                    {
                        orderList.length > 0 ? (
                            <>
                                <table>
                                    <thead>
                                    <tr style={{borderBottom: '1px solid black', color: "#9A9A9A", fontSize: '14px'}}> 
                                        <th>주문일자</th>
                                        <th className={styles.table_header_image}>이미지</th> 
                                        <th style={{width: '220px'}}>&nbsp;&nbsp;상품 정보&nbsp;&nbsp;</th> 
                                        <th>수량</th>
                                        <th>상품구매금액</th>
                                        <th>주문처리상태</th>
                                        <th>취소</th>
                                    </tr> 
                                    </thead>
                                 {
                                    orderList.map((v) => (
                                        <tbody key={v.orderId}>
                                        { v.orderItems.map((item, i) => (
                                            <tr key={item.orderItemId}> 
                                                { i === 0 && 
                                                <td className={styles.table_order_date} rowSpan={v.orderItems.length}>
                                                    {Moment(v.orderDate, format).format("YYYY-MM-DD")}<br/>
                                                    { v.orderStatus !== 'CANCEL' && 
                                                        <button onClick={onClickOrderCancel(v.orderId)} className={styles.table_order_cancel_btn}>
                                                            주문취소
                                                        </button>
                                                    }
                                                </td> 
                                                }
                                                <td style={{padding: '8px'}}>
                                                    <Image 
                                                        src={item.image ? `http://localhost:8080/static/${item.image[0].location}` : undefined }
                                                        width={80}
                                                        height={80}
                                                    />
                                                </td> 
                                                <td className={styles.table_order_title}>
                                                    {item.title}
                                                    <p style={{color: '#757575'}}>[옵션: {item.size}]</p> 
                                                </td> 
                                                <td className={styles.table_font_family}>{item.count}</td>
                                                <td className={styles.table_font_family}>{item.total.toLocaleString('ko-KR')}원</td>
                                                <td className={v.orderStatus === 'ORDER' ? styles.table_order_status_blue : styles.table_order_status_red}>
                                                    {v.orderStatus === 'ORDER' ? "주문준비" : "주문취소"}
                                                </td> 
                                                <td>-</td>
                                            </tr> 
                                        ))}
                                        </tbody>
                                        
                                    ))
                                }
                               </table>
                            </>
                        ): (
                        <div style={{textAlign: 'center'}}>
                                <br/><br/><br/>
                                    <span style={{fontSize: "14px", color: "#707070"}}>주문 내역이 없습니다.</span>
                                <br/><br/>
                                <br/><br/>
                        </div>
                        )
                    }
                    <div style={{borderBottom: '1px solid black'}} />
                    <div style={{color: "#797979", fontSize: "11px", marginTop: '5px'}}>
                        <span>기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 주문처리완료 후 36개월 이내의 주문내역을 조회하실 수 있습니다.</span><br/>  
                        <span>주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</span>  <br/>
                    </div>
         
                </Col>
            </Row>
        </Container>
      <Footer />
    </>
  )
}

export default list