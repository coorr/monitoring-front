import React, { useCallback,useState,useRef, useEffect } from 'react'
import Header from '../components/header'
import AuthService from '../../service/user/Auth.service';
import Router from 'next/router'
import styles from '../components/css/User.module.css'
import ItemService from '../../service/item/Item.service'
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM_REQUEST, REMOVE_IMAGE_REQUEST, UPLOAD_IMAGE_REQUEST } from '../reducers/item';
import Button from "react-bootstrap/Button";
import Footer from '../components/Footer';

const AddItem = () => {
  const dispatch = useDispatch();
  const textRef =useRef(null);
  const fileRef =useRef(null);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [category, setCategory] = useState('outwear');
  const [size, setSize] = useState('');
  const [material, setMaterial] = useState('');
  const [info, setInfo] = useState('');
  const [admin, setAdmin ]  = useState(false);
  const file = [];

  const { imagePath, addItemDone, getItemError } = useSelector((state) => state.item);

  useEffect(() => {
    const adminData = AuthService.getCurrentUser();
    if(!admin && adminData === null) {
      Router.push("/")
    } else if(!admin && adminData.roles[0] === 'ROLE_USER') {
      Router.push("/")
    } else if(!admin &&  adminData.roles[0] === 'ROLE_ADMIN') {
      setAdmin(adminData); 
    }
  },[admin])
  console.log(admin);

  // useEffect(() => {
  //   if(addItemDone) {
  //     setTitle(''); setPrice(''); setDiscountPrice(''); setCategory('')
  //     setSize(''); setInfo(''); setMaterial('');
  //   }
  // }, [addItemDone])

  const textResize = useCallback(() => {
    const obj = textRef.current;
    obj.style.height='auto';
    obj.style.height= obj.scrollHeight + 'px';
  },[]);
  
  const handleComplete = useCallback(() => {
    const formData = new FormData();
    imagePath.forEach((file) => {
      formData.append('multipartFiles', file);
  });
    const itemData = {
      title: title,
      price: price,
      discountPrice: discountPrice,
      category: category,
      size: size,
      material: material,
      info: info
    }
    formData.append('itemData', JSON.stringify(itemData));

    dispatch({
      type: ADD_ITEM_REQUEST,
      data: formData
    })
  },[imagePath, title,price,discountPrice,category,size,material,info]);

  const onClickImageUpload = useCallback(() => {
    fileRef.current.click();
  }, [fileRef.current])

  const onChangeImage = useCallback((e) => {
      [].forEach.call(e.target.files, (f) => {
        file.push(f);
      })
      dispatch({ 
        type: UPLOAD_IMAGE_REQUEST,
        data: file
      })
  }, [file]);
  
  const onClickRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE_REQUEST,
      data: index
    })
  });
  
  return (
    <>
     {
      admin && (
        <>
         {/* <Header /> */}
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
                <select onChange={e => setCategory(e.target.value)} defaultValue={category} className="form-control" style={{border: "1px solid #ddd !important"}} >
                  <option value="outwear">Outwear</option>
                  <option value="knitwear">Knitwear</option>
                  <option value="sweatshirt">Sweatshirt</option>
                  <option value="shirt">Shirt</option>
                  <option value="t-shirt">T-Shirt</option>
                </select>
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
                <br />
                <input onChange={onChangeImage} type="file" multiple hidden ref={fileRef} />
                <Button onClick={onClickImageUpload} variant="info" >이미지</Button>

                { imagePath.map((v,i) => (
                    <div key={i}>
                       <p>{v.name} <Button variant="info" onClick={onClickRemoveImage(i)}>제거</Button></p>
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
        <Footer />
        </>
      )
    } 
    </>
  )
}

export default AddItem

