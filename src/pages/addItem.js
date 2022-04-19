import React, { useCallback,useState,useRef, useEffect } from 'react'
import Header from '../components/header'
import AuthService from '../../service/user/Auth.service';
import Router from 'next/router'
import styles from '../components/css/User.module.css'
import ItemService from '../../service/item/Item.service'
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM_REQUEST } from '../reducers/item';
import Button from "react-bootstrap/Button";


const data = 
'- 원사 스트레치 나일론 폴리 혼방 소재의 시어서커 자켓\r\n'+
'- 패널 절개 디테일이 특징인 세미오버핏 실루엣\r\n'+
'- 곡선진 절개 라인과 플리츠 디테일\r\n'+
'- 전면부 몸판 다트 디테일\r\n'+
'- 뒤판과 연결되는 섬세하고 유니크한 절개 라인\r\n'+
'- 시어서커 플리츠 팬츠와 셋업으로 착용 가능\r\n'+
'- 드라이 크리닝';



const AddItem = () => {
  const dispatch = useDispatch();
  const textRef =useRef(null);
  const fileRef =useRef(null);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [material, setMaterial] = useState('');
  const [info, setInfo] = useState('');
  const [admin, setAdmin ]  = useState(false);

  const { imagePath, addItemDone } = useSelector((state) => state.item);


  useEffect(() => {
    const admin = AuthService.getCurrentUser().roles.includes("ROLE_ADMIN")
    if(!admin) {
      Router.push("/")
    }
    setAdmin(admin);  
  })

  useEffect(() => {
    if(addItemDone) {
      setTitle(''); setPrice(''); setDiscountPrice(''); setCategory('')
      setSize(''); setInfo(''); setMaterial('');
    }
  }, [addItemDone])

  const textResize = useCallback(() => {
    const obj = textRef.current;
    obj.style.height='auto';
    obj.style.height= obj.scrollHeight + 'px';
  },[]);
  
  const handleComplete = useCallback(() => {
    const itemData = {
      title: title,
      price: price,
      discount_price: discountPrice,
      category: category,
      size: size,
      material: material,
      info: info
    }
  
    dispatch({
      type: ADD_ITEM_REQUEST,
      data: itemData
    })
    // ItemService.insertItemAll(itemData)
    //   .then(res => {
    //     console.log("아이템 정보 넘기기");
    //   })
    //   .catch(err => {
    //     if(err.response.status === 401) {
    //           AuthService.logout();
    //           Router.push("login")
    //     }
    //   })
    
    
  },[title,price,discountPrice,category,size,material,info]);

  const onClickImageUpload = useCallback(() => {
    fileRef.current.click();
  }, [fileRef.current])
  
  return (
    <>
    {
      admin && (
        <>
         <Header />
      <div className="col-md-12">
          <div className={styles.add_cloth_cotainer}>
            <label className={styles.login_font_title}>옷 등록</label>
            <br />
            <br />
              <div className="form-group">
                <label htmlFor="username" className={styles.login_font_input}>옷 이름</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="price" className={styles.login_font_input}>가격</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={price} 
                    onChange={e => setPrice(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="discount_price" className={styles.login_font_input}>할인가격</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={discountPrice} 
                    onChange={e => setDiscountPrice(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="category" className={styles.login_font_input}>카테고리</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={category} 
                    onChange={e => setCategory(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="size" className={styles.login_font_input}>사이즈 정보</label>
                <textarea 
                    type="text" 
                    className={styles.textarea_form_control } 
                    value={size} 
                    onChange={e => setSize(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="material" className={styles.login_font_input}>소재 정보</label>
                <textarea 
                    type="text" 
                    className={styles.textarea_form_control } 
                    value={material} 
                    onChange={e => setMaterial(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="info" className={styles.login_font_input}>옷 정보</label>
                <textarea 
                    ref={textRef}
                    className={styles.textarea_form_control }
                    onKeyDown={textResize}
                    onKeyUp={textResize}
                    value={info}
                    wrap="hard"
                    onChange={e => setInfo(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="info" className={styles.login_font_input}>사진</label>
                <input type="file" multiple hidden ref={fileRef} />
                <Button onClick={onClickImageUpload} variant="info" >이미지</Button>
                { imagePath.map((v) => (
                  <div key={v} style={{display: 'inline-block'}}>
                    <img src={v} style={{width:'150px'}} alt={v} />
                    <div>
                      <Button variant="info">제거</Button>
                    </div>
                  </div>
                ))}
              </div>

             

              <br />
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  onClick={handleComplete}
                >
                  <span>완료</span>
                </button>
              </div>
          </div>
        </div>
        </>
      )
    }
    </>
  )
}

export default AddItem

