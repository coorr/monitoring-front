import React, {useState, useEffect, useRef, useCallback} from 'react'
import { useRouter } from 'next/router'
import Footer from '../../../components/Footer'
import Header from '../../../components/header'
import AuthService from '../../../../service/user/Auth.service'
import styles from '../../../components/css/User.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { REVISED_ITEM_REQUEST, UPLOAD_IMAGE_REQUEST } from '../../../reducers/item'

const ItemRevised = () => {
    const router = useRouter();
    const dispatch = useDispatch(); 
    const textRef =useRef(null);
    const fileRef =useRef(null);

    const [itemId, setItemId] = useState(router.query.id);
    const [title, setTitle] = useState(router.query.title);
    const [price, setPrice] = useState(router.query.price);
    const [discountPrice, setDiscountPrice] = useState(router.query.discount_price);
    const [category, setCategory] = useState(router.query.category);
    const [size, setSize] = useState(router.query.size);
    const [material, setMaterial] = useState(router.query.material);
    const [info, setInfo] = useState(router.query.info);
    const [admin, setAdmin ]  = useState(false);
    const file = [];
    
    const [imagePath, setImagePath] = useState(router.query.image ? JSON.parse(router.query.image) : [])
    const [newImagePath, setNewImagePath] = useState([])
    // const { imagePath, addItemDone, getItemError } = useSelector((state) => state.item);

    useEffect(() => {
        const adminData = AuthService.getCurrentUser();
        if(!admin && adminData === null) {
            router.push("/")
        } else if(!admin && adminData.roles[0] === 'ROLE_USER') {
            router.push("/")
        } else if(!admin &&  adminData.roles[0] === 'ROLE_ADMIN') {
            setAdmin(adminData); 
        }

        
    },[admin])

    console.log(admin);
    console.log(router.query);


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
    console.log(newImagePath);
    newImagePath.forEach((file) => {
      formData.append('multipartFiles', file);
  });

  const itemData = {
      id: itemId,
      title: title,
      price: price,
      discountPrice: discountPrice,
      category: category,
      size: size,
      material: material,
      info: info
    }
  
    formData.append('itemData', JSON.stringify(itemData));
    formData.append('imagePath', JSON.stringify(imagePath));

    dispatch({
      type: REVISED_ITEM_REQUEST,
      data: formData,
    })
  },[newImagePath, imagePath,itemId, title,price,discountPrice,category,size,material,info]);

  const onClickImageUpload = useCallback(() => {
    fileRef.current.click();
  }, [fileRef.current])

  const onChangeImage = useCallback((e) => {
      [].forEach.call(e.target.files, (f,i) => {
        file.push(f);
      })
      setNewImagePath(newImagePath.concat(file))
  }, [file,newImagePath]);
  
  const onClickRemoveImage = useCallback((index) => () => {
    setImagePath(imagePath.filter((v,i) => i !== index))
  });  

  const onClickRemoveNewImage = useCallback((index) => () => {
    setNewImagePath(newImagePath.filter((v,i) => i !== index))
  });
  console.log(imagePath);
  

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
                <input  onChange={onChangeImage} type="file" multiple hidden ref={fileRef} />
                <Button onClick={onClickImageUpload} variant="info" >이미지</Button>

                { imagePath.map((v,i) => (
                    <div key={i}>
                        <p>{v.name ? v.name : v.location} <Button variant="info" onClick={onClickRemoveImage(i)}>제거</Button></p>
                    </div>
                ))} 
                { newImagePath.map((v,i) => (
                    <div key={i}>
                        <p>{v.name ? v.name : v.src} <Button variant="info" onClick={onClickRemoveNewImage(i)}>제거</Button></p>
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

export default ItemRevised