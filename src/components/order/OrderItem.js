import React, { useCallback, useEffect, useState } from 'react'
import { Container, Row, Col, Card,ListGroup, Button } from 'react-bootstrap'
import styles from '../../components/css/Product.module.scss'
import DeleteIcon from '../../images/btn_price_delete.gif'
import Image from 'next/image';
import { BASKET_REMOVE_USER_REQUEST } from '../../reducers/item';
import AuthService from '../../../service/user/Auth.service';
import { useDispatch } from 'react-redux';
import { location } from '../../config/location';

const OrderItem = ({item}) => {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('')

    useEffect(() => {
        const userLocalData = AuthService.getCurrentUser();

        if (userId.length === 0 && userLocalData !== null) {
            setUserId(userLocalData.id);
        }
    }, [userId]);

    const onClickBasketRemove = useCallback((keyIndex) => () => {
        if(confirm("선택하신 상품을 삭제하시겠습니까?")) {
            if(userId !== '') {
                dispatch({
                    type: BASKET_REMOVE_USER_REQUEST,
                    data: keyIndex,
                    userId
                })
            }
        } else { return; }
    },[userId])

    console.log(item);

  return (
    <div>
    <br />
    <Card style={{flexDirection:'row'}} >
        <Card.Img 
        src={item.image ? location+`${item.image[0].location}` : undefined }
        height={110}
        style={{width: "13%", margin: 0}}
        />
        <Card.Body id={styles.basket_body_text}>
            <Card.Title style={{ fontSize: '15px'}}>
                {item.title}
                <button onClick={onClickBasketRemove(item.keyIndex)} className={styles.item_add_remove_btn}  style={{float: 'right', color: '#9A9A9A'}}>
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