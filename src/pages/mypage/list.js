import React, { useState, useEffect, useCallback } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import { Container, Row, Col, Card,ListGroup, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import styles from '../../components/css/Page.module.css'
import AuthService from '../../../service/user/Auth.service';
import { GET_ORDER_ALL_REQUEST } from '../../reducers/order';
import Moment from 'moment';
import Image from 'next/image';

const list = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('')
  const [timeControl, setTimeControl] = useState(["오늘", "1개월", "3개월"])
  const [timeOne, setTimeOne] = useState("오늘");

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
            userId
        })
    }
},[userId])

  const onClickTimeControl = useCallback((e) => {
    setTimeOne(e.target.value)
  },[timeControl, timeOne])
  
  console.log(orderList);

  return (
    <>
      <Header />
      <div className="middle_space_screen" />
        <Container style={{maxWidth: '820px'}}>
            <Row>
                <Col>
                    <span style={{display: 'flex', fontSize: '14px'}}>주문조회</span><br />
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
                            
                        >   
                            {v}
                        </button>
                    ))}

{/* <table>
                                <tr style={{borderBottom: '1px solid black', color: "#9A9A9A", fontSize: '14px'}}> 
                                    <th>주문일자</th>
                                    <th>이미지</th> 
                                    <th>상품 정보</th> 
                                    <th>수량</th>
                                    <th>상품구매금액</th>
                                    <th>주문처리상태</th>
                                    <th>취소</th>
                                </tr> 
                                <tr> 
                                    <td rowspan="2">1</td> 
                                    <td rowspan="2">ABCDE</td> 
                                    <td>Data2 a</td> 
                                    <td>1</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td rowspan="2">620</td>
                                </tr> 
                                <tr> 
                                    <td>Data2 b</td> 
                                    <td>4</td> 
                                    <td>130</td> 
                                    <td>152</td>
                                </tr>
                                <tr> 
                                    <td rowspan="3">2</td> 
                                    <td rowspan="3">ABC</td> 
                                    <td>Data2 c</td> 
                                    <td>2</td>
                                    <td>400</td>
                                    <td>800</td>
                                    <td rowspan="3">1560</td>
                                </tr> 
                                <tr> 
                                    <td>Data2 d</td> 
                                    <td>2</td> 
                                    <td>200</td> 
                                    <td>400</td>
                                </tr>
                                <tr> 
                                    <td>Data2 e</td> 
                                    <td>3</td> 
                                    <td>120</td> 
                                    <td>360</td>
                                </tr>
                                <tr> 
                                    <td>3</td> 
                                    <td>ASS</td> 
                                    <td>Data 2 f</td> 
                                    <td>1</td> 
                                    <td>100</td> 
                                    <td>100</td> 
                                    <td>100</td> 
                                </tr>
                                </table> */}

                    <div style={{borderBottom: '1px solid black', marginTop: '8px'}} />
                    

                    {
                        orderList.length > 0 ? (
                            <>
                                <table>
                                    <tr style={{borderBottom: '1px solid black', color: "#9A9A9A", fontSize: '14px'}}> 
                                        <th>주문일자</th>
                                        <th>이미지</th> 
                                        <th>상품 정보</th> 
                                        <th>수량</th>
                                        <th>상품구매금액</th>
                                        <th>주문처리상태</th>
                                        <th>취소</th>
                                    </tr> 
                                 {
                                    orderList.map((v) => (
                                        <>
                                        
                                        { v.orderItems.map((item, i) => (
                                            <tr> 
                                                { i === 0 && 
                                                <td className={styles.table_order_date} rowspan={v.orderItems.length}>
                                                    {Moment(v.orderDate, "YYYY.MM.DD").format("YYYY-MM-DD")}
                                                </td> 
                                                }
                                                <td className={styles.table_order_image}>
                                                    <Image 
                                                        src={item.image ? `http://localhost:8080/static/${item.image[0].location}` : undefined }
                                                        width={65}
                                                        height={65}
                                                    />    
                                                </td> 
                                                <td>{item.title}</td> 
                                                <td>{item.count}</td>
                                                <td>{item.total}</td>
                                                <td>{v.deliveryStatus}</td>
                                                <td>취소</td>
                                            </tr> 
                                        ))}
                                        </>
                                        
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