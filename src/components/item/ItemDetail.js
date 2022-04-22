
import React from 'react'
import { Container, Row, Col, Card,Button } from 'react-bootstrap'
import styles from '../css/Product.module.scss'

const ItemDetail = ({ itemDetail }) => {
    return (

    <Container>
    <Row>
      {/* <div className="col-md-6" style={{border: '1px solid red'}}> */}
      <Col xs={12} md={7}>
        <img src={`http://localhost:8080/static/${itemDetail.images[0].src}`} alt="이미지" width="100%" height="900px" />
      </Col>
      <Col xs={12} md={5}>
        <div className="mx-5">
            <div style={{ fontSize: "13px", color: "#555555"}}>
                <span className={styles.item_text}>{itemDetail.title}</span>
                <span className={styles.item_text} style={{ textDecoration: 'line-through'}}>{itemDetail.price.toLocaleString('ko-KR')}원</span>
                <span className={styles.item_text}>{itemDetail.discount_price.toLocaleString('ko-KR')}원</span>
            </div>
            <br/>            
           
            <Button id={styles.item_size_btn}>S</Button>
            <Button id={styles.item_size_btn}>M</Button>
            <Button id={styles.item_size_btn}>L</Button>
            <br />
            <br />
            <div style={{borderBottom: '1px solid #9a9ba0'}} />
            <br />
        <div style={{ fontSize: "13px", color: "#555555"}}>
            <p>Total : 0</p>
            <br />
            <Button>add to cart</Button>
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