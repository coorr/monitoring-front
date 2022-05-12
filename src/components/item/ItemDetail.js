
import React, { memo, useCallback, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  BASKET_ADD_USER_REQUEST, BASKET_GET_REQUEST, BASKET_GET_USER_REQUEST, BASKET_NULL_REQUEST, CURRENT_ITEM_REQUEST,  DOWN_COUNT_ITEMLIST_REQUEST, 
        DUPLICATE_SIZE_QUANTITY_CHECK_REQUEST, 
        PLUS_COUNT_ITEMLIST_REQUEST, REMOVE_COUNT_ITEMLIST_REQUEST, REMOVE_ITEM_REQUEST } from '../../reducers/item'
import styles from '../css/Product.module.scss';
import DeleteIcon from '../../images/btn_price_delete.gif';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AuthService from '../../../service/user/Auth.service';
import { location } from '../../config/location';


const ItemDetail = ({ itemDetail }) => {
    const router = useRouter();
    const [sizeValueArray, setSizeValueArray] = useState(['S','M','L'])
    const [sizeValueArrays, setSizeValueArrays] = useState([{"S": itemDetail.quantityS }, {"M": itemDetail.quantityM },{ "L": itemDetail.quantityL}])
    const [sizeValue, setSizeValue] = useState('');
    const [admin, setAdmin] = useState(false);
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();
    const { basketItem ,currentItem, total, count  } = useSelector((state) => state.item);

    useEffect(() => {
        console.log("ItemDetail.useEffect");
        const adminData = AuthService.getCurrentUser();

        if (!admin&& adminData !== null && adminData.roles.includes("ROLE_ADMIN")) {
            setAdmin(adminData);
        }
        if (userId === '' && adminData !== null) {
            setUserId(adminData.id)
            dispatch({
                type: BASKET_GET_USER_REQUEST,
                userId: adminData.id
            })
        }

    },[admin,userId])
    console.log("itemDetail" , itemDetail);

    const onClickSizeValue = useCallback((index)  =>  (e) => {
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
        const image = itemDetail.images;
        const discount = itemDetail.price-itemDetail.discount_price;
        const keyIndex = parseInt(itemDetail.itemId+""+index+""+userId); // 임의의 값(원래는 디비에서 사이즈 별로 값을 넘겨줘야 함)
        
        dispatch({
            type: CURRENT_ITEM_REQUEST,
            data: {itemId, keyIndex, title, size, itemCount, price, itemTotal, discount,image},
            total: price,
            count: 1
        })
        
    },[sizeValue, currentItem])

    const onClickItemListDown = useCallback((index) => () => {
        for(var i=0; i<currentItem.length; i++) {
            if(currentItem[i].keyIndex === index &&  currentItem[i].itemCount  === 1) {
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
        const history = router;
        if(currentItem.length === 0) {
            return alert("필수 옵션을 선택해주세요.")
        }
        
        if(userId !== '') {
            const basketkey = basketItem.map(v => v.keyIndex)  // 장바구니 키 출력
            const sameItemDataAry = currentItem.filter(v => basketkey.includes(v.keyIndex)) // 같은 키 값을 가진 currentItem 배열 출력
            if(sameItemDataAry.length > 0) {
                if(confirm("장비구니에 동일한 상품이 있습니다. \n장바구니에 추가하시겠습니까?")) {
                    dispatch({
                        type: BASKET_ADD_USER_REQUEST,
                        userId: userId,
                        data: currentItem,
                        history,
                    }, )
                } else {
                    return;
                }
            } else {
                dispatch({
                    type: BASKET_ADD_USER_REQUEST,
                    userId: userId,
                    data: currentItem,
                    history,
                })
            }
        } else {
              dispatch({
                type: DUPLICATE_SIZE_QUANTITY_CHECK_REQUEST,
                data: currentItem,
                history
              })
        }
    });

    const onClickItemRevised = useCallback(() => {
        const image = itemDetail.images;
        router.push({
            pathname: "/item/revised/itemRevised",
            query: {image : JSON.stringify(image), 
                    id: itemDetail.itemId,
                    title: itemDetail.title, 
                    price: itemDetail.price, 
                    discount_price: itemDetail.discount_price, 
                    quantityS: itemDetail.quantityS,
                    quantityM: itemDetail.quantityM,
                    quantityL: itemDetail.quantityL,
                    category: itemDetail.category, 
                    size: itemDetail.size, 
                    material: itemDetail.material, 
                    info: itemDetail.info
                }
        }, "/item/revised/itemRevised")
    })

    const onClickRemoveItem = useCallback(() => {
        const history = router;
        if(confirm("삭제하시겠습니까?")) {
            dispatch({
                type: REMOVE_ITEM_REQUEST,
                data: itemDetail.itemId,
                history: history
            })
        } else {
            return;
        }
    })

    console.log(currentItem);

    return ( 


    <Container>
    <Row>
      <Col xs={12} md={6}>
        <img src={itemDetail.images.length > 0 ? location+`${itemDetail.images[0].location}` : []} alt="이미지" width="100%" height="900px" />
        &nbsp;
      </Col>
      <Col xs={12} md={6}>
        <div className="mx-5">
            <div style={{ fontSize: "13px", color: "#555555"}}>
                {
                    admin && (
                    <>
                    <button onClick={onClickItemRevised} style={{padding: "8px",backgroundColor:"white", float: "right", border: "1px solid #6693D7", fontSize:"12px", color:"#6693D7"}}>
                        수정하기
                    </button>
                    <button onClick={onClickRemoveItem} style={{marginRight: "3px",padding: "8px",backgroundColor:"white", float: "right", border: "1px solid black", fontSize:"12px", color:"black"}}>
                        삭제하기
                    </button>
                    </>
                    )
                }
                <span className={styles.item_text}>{itemDetail.title}</span>
                <span className={styles.item_text} style={{ textDecoration: 'line-through'}}>{itemDetail.price.toLocaleString('ko-KR')}원</span>
                <span className={styles.item_text}>{itemDetail.discount_price.toLocaleString('ko-KR')}원</span>
            </div>
            <br/>       
            <div  style={{display:"flex"}}>   
           {
               sizeValueArrays.map((v,i) => (
                    <div key={"size"+i}>
                        {
                            v[sizeValueArray[i]] === 0 ? (
                                <Button 
                                    id={styles.item_size_btn_disabled} 
                                    disabled
                                >
                                    {sizeValueArray[i]}
                                </Button>
                            ) : (
                                <Button 
                                    id={sizeValueArray[i] === sizeValue ? styles.item_size_btn : styles.item_size_btn_2} 
                                    value={sizeValueArray[i]} 
                                    onClick={onClickSizeValue(i)}
                                >
                                    {sizeValueArray[i]}
                                </Button>
                            )
                        }
                    </div>
               ))
           }
           </div>
           <br />
           <div style={{ fontSize: "13px", color: "#555555"}}>
            {
               currentItem.map((v,i) => (
                 <div key={v.keyIndex}>
                   {
                       i >= 1 && (
                           <>
                               <br />
                               <div style={{borderBottom: '1px solid #9a9ba0'}} />
                           </>                        
                       )
                   }
                   <br/>
                   <span   style={{marginBottom: '3px'}}>{v.title + " - " + v.size}</span>
                  
                   <div  style={{float: 'right'}}>
                     <button onClick={onClickItemListDown(v.keyIndex)} className={styles.item_add_remove_btn}>-</button> &nbsp;&nbsp;
                     <span>{v.itemCount}</span>&nbsp;&nbsp;
                     <button onClick={onClickItemListPlus(v.keyIndex)} className={styles.item_add_remove_btn}>+</button>&nbsp;&nbsp;
                     <button onClick={onClickItemListRemove(v.keyIndex)} className={styles.item_add_remove_btn}><Image src={DeleteIcon} /></button>
                   </div>
                   <br />
                 </div>
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
                <br/>

                <span>Fabric Description</span>
                <p>{itemDetail.material}</p><br />

                <br/>
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

export default memo(ItemDetail)