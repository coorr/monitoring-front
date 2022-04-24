
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BASKET_ADD_ITEMLIST_REQUEST, CURRENT_ITEM_REQUEST, DOWN_COUNT_ITEMLIST_REQUEST, 
        PLUS_COUNT_ITEMLIST_REQUEST, REMOVE_COUNT_ITEMLIST_REQUEST } from '../../reducers/item'
import styles from '../css/Product.module.scss';
import DeleteIcon from '../../images/btn_price_delete.gif';
import Image from 'next/image';
import {  useRouter } from 'next/router';
import AuthService from '../../../service/user/Auth.service';
import Link from 'next/link';


const ItemDetail = ({ itemDetail }) => {
    const router = useRouter();
    const [sizeValueArray, setSizeValueArray] = useState(['S','M','L'])
    const [sizeValue, setSizeValue] = useState('');
    const [admin, setAdmin] = useState(false);
    const dispatch = useDispatch();
    const { currentItem, total, count } = useSelector((state) => state.item);

    useEffect(() => {
        const adminData = AuthService.getCurrentUser();

        if (!admin&& adminData !== null && adminData.roles.includes("ROLE_ADMIN")) {
            setAdmin(adminData);
        }
    },[admin])

    const onClickSizeValue = useCallback((e,index)  => {
        if(sizeValue === e.target.value) {
            return setSizeValue('');
        }   
        for(var i=0; i<currentItem.length; i++) {
            if(currentItem[i].size === e.target.value) {
                setSizeValue(e.target.value)
                return alert("아래 리스트에서 이미 선택한 옵션을 삭제 후 다시 선택해 주세요.")
            }
        }
        setSizeValue(e.target.value)
        const size= e.target.value;
        const itemCount = 1
        const itemId = itemDetail.itemId;
        const title = itemDetail.title;
        const price = itemDetail.discount_price;
        const itemTotal = itemDetail.discount_price;
        const image = itemDetail.images[0].src;
        const discount = itemDetail.price-itemDetail.discount_price;
        const keyIndex = itemDetail.itemId+"_"+index;


        
        dispatch({
            type: CURRENT_ITEM_REQUEST,
            data: {itemId, keyIndex, title, size, itemCount, price, itemTotal, discount,image},
            total: price,
            count: 1
        })
        
    })

    const onClickItemListDown = useCallback((index) => () => {
        for(var i=0; i<currentItem.length; i++) {
            if(currentItem[i].index === index &&  currentItem[index].itemCount  === 1) {
                return alert("최소 주문수량은 1개 입니다.")
            }
        }
        dispatch({
            type: DOWN_COUNT_ITEMLIST_REQUEST,
            data: index
        })
    },);

    const onClickItemListPlus = useCallback((index) => () => {
        dispatch({
            type: PLUS_COUNT_ITEMLIST_REQUEST,
            data: index
        })
    },);

    const onClickItemListRemove = useCallback((index) => () => {
        dispatch({
            type: REMOVE_COUNT_ITEMLIST_REQUEST,
            data: index
        })
    });

    const onClickComplete = useCallback(() =>  {
        if(currentItem.length === 0) {
            return alert("필수 옵션을 선택해주세요.")
        }
        const localRecentProduct = JSON.parse(localStorage.getItem('localRecentProduct'));
        if(localRecentProduct !== null) {
            currentItem.forEach(v => {
                localRecentProduct.unshift(v)
            })
            localStorage.setItem("localRecentProduct", JSON.stringify(localRecentProduct));
        } else {
            localStorage.setItem("localRecentProduct", JSON.stringify(currentItem));
        }   
        
        router.push("/basket") 
    });


    console.log(currentItem);

    const onClickItemRevised = useCallback(() => {
        console.log(itemDetail);
        const image = itemDetail.images;
        console.log(image);
        router.push({
            pathname: "/item/revised/itemRevised",
            query: {image : image.join(","),}
            // locale: image
        }, "/item/revised/itemRevised")
    })

    return ( 


    <Container>
    <Row>
      <Col xs={12} md={6}>
        <img src={`http://localhost:8080/static/${itemDetail.images[0].src}`} alt="이미지" width="100%" height="900px" />
      </Col>
      <Col xs={12} md={6}>
        <div className="mx-5">
            <div style={{ fontSize: "13px", color: "#555555"}}>
                {
                    admin && (
                        <button onClick={onClickItemRevised} style={{backgroundColor:"skyblue", float: "right", border: "5px solid skyblue", fontWeight: "bold"}}>
                            수정하기
                        </button>
                    )
                }
                <span className={styles.item_text}>{itemDetail.title}</span>
                <span className={styles.item_text} style={{ textDecoration: 'line-through'}}>{itemDetail.price.toLocaleString('ko-KR')}원</span>
                <span className={styles.item_text}>{itemDetail.discount_price.toLocaleString('ko-KR')}원</span>
            </div>
            <br/>            
           {
               sizeValueArray.map((v,i) => (
                 <Button 
                    key={"size"+i} 
                    id={v === sizeValue ? styles.item_size_btn : styles.item_size_btn_2} 
                    value={v} 
                    onClick={(e) => onClickSizeValue(e,i)}
                 >
                     {v}
                 </Button>
               ))
           }
           <br />
           <br />
           <div style={{ fontSize: "13px", color: "#555555"}}>
            {
               currentItem.map((v,i) => (
                 <>
                   {
                       i >= 1 && (
                           <>
                               <br />
                               <div style={{borderBottom: '1px solid #9a9ba0'}} />
                           </>                        
                       )
                   }
                   <br/>
                   <span key={"item"+i}  style={{marginBottom: '3px'}}>{v.title + " - " + v.size}</span>
                  
                   <div  style={{float: 'right'}}>
                     <button onClick={onClickItemListDown(v.index)} className={styles.item_add_remove_btn}>-</button> &nbsp;&nbsp;
                     <span>{v.itemCount}</span>&nbsp;&nbsp;
                     <button onClick={onClickItemListPlus(v.index)} className={styles.item_add_remove_btn}>+</button>&nbsp;&nbsp;
                     <button onClick={onClickItemListRemove(v.index)} className={styles.item_add_remove_btn}><Image src={DeleteIcon} /></button>
                   </div>
                   <br />
                 </>
               ))
           }
           </div>
           <br />
            <div style={{borderBottom: '1px solid #9a9ba0'}} /><br />

            <div style={{ fontSize: "13px", color: "#555555"}}>
                <p>Total : {total ? total.toLocaleString('ko-KR') : 0}{count !== 0 && ' ('+count+'개)'}</p><br />

                <Button onClick={onClickComplete}>add to cart</Button>
                <br /><br /><br /><br /><br />

                <span>Size</span>
                <textarea 
                    className={styles.textarea_form_control } 
                    value={itemDetail.size} 
                    disabled
                />

                <p>Fabric Description</p>
                <p>{itemDetail.material}</p><br />

                <span>Info</span>
                <textarea
                    className={styles.textarea_form_control } 
                    value={itemDetail.info}
                    disabled
                />
                <br />
                </div>
            </div>
        </Col >
        </Row>
    </Container>
  )
}

export default ItemDetail