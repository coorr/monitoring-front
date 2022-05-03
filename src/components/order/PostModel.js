import React, { useCallback } from 'react'
import { Modal, Container} from 'react-bootstrap';
import DaumPostcode from 'react-daum-postcode';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../components/css/Header.module.css'
import { ADDRESS_ORDER_REQUEST, IS_POST_OPEN_REQUEST } from '../../reducers/item';


const PostModel = ({show, onHide} )  => {
  const dispatch = useDispatch();
  const {isOpenPost } = useSelector((state) => state.item) 


  const onCompletePost = useCallback((data) => {
    let address = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
        if (data.bname !== '') {
        extraAddr += data.bname;
        }
        if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        address += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    dispatch({
        type: ADDRESS_ORDER_REQUEST,
        address,
        roadNumber: data.zonecode
    })
    dispatch({
        type: IS_POST_OPEN_REQUEST
    })

    console.log(data);
    console.log(data.zonecode);
    console.log(address);
    });

    const onClickModelClose = useCallback(() => {
        dispatch({
            type: IS_POST_OPEN_REQUEST
        })
    })
  return (
    <>
    <Modal
    show={show}
    onHide={onHide}
    size="lg" // sm
    aria-labelledby="contained-modal-title-vcenter"
    // centered
  > 
   
    <Modal.Header >
      <Modal.Title id="contained-modal-title-vcenter">우편번호 검색</Modal.Title>
      <button onClick={onClickModelClose} style={{fontSize:'25px', color: 'black', border: 0, backgroundColor: 'white'}}>X</button>
    </Modal.Header>
        <Modal.Body>
            <Container>
                <DaumPostcode className={styles.postCodeStyle} autoClose onComplete={onCompletePost } />
            </Container>
        </Modal.Body>
    </Modal>
  </>
  )
}

export default PostModel