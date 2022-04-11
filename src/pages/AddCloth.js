import React, { Component } from 'react'
import Header from '../components/header'
import AuthService from '../../service/user/Auth.service';
import Router from 'next/router'
import styles from '../components/css/User.module.css'
import ItemService from '../../service/item/Item.service'

const data = 
'- 원사 스트레치 나일론 폴리 혼방 소재의 시어서커 자켓\r\n'+
'- 패널 절개 디테일이 특징인 세미오버핏 실루엣\r\n'+
'- 곡선진 절개 라인과 플리츠 디테일\r\n'+
'- 전면부 몸판 다트 디테일\r\n'+
'- 뒤판과 연결되는 섬세하고 유니크한 절개 라인\r\n'+
'- 시어서커 플리츠 팬츠와 셋업으로 착용 가능\r\n'+
'- 드라이 크리닝';

export default class AddCloth extends Component {
  textRef= React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      price:'',
      discount_price:'',
      category:'',
      size:'',
      material:'',
      info:'',
    }
  }

  componentDidMount() {
    const admin = AuthService.getCurrentUser().roles.includes("ROLE_ADMIN");
    if(!admin) {
      Router.push("/")
    }
  }
  
  textResize = () => {
    const obj = this.textRef.current;
    obj.style.height='auto';
    obj.style.height= obj.scrollHeight + 'px';
  }

  handleComplete = () => {
    console.log("마지?");
    const { title, price, discount_price, category, size, material, info } = this.state;
    const itemData = {
      title: title,
      price: price,
      discount_price: discount_price,
      category: category,
      size: size,
      material: material,
      info: info
    }

    ItemService.insertItemAll(itemData)
      .then(res => {
        console.log("아이템 정보 넘기기");
      })

  }
  render() {
    const { title, price, discount_price, category, size, material, info } = this.state;
    return (
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
                      onChange={(e) => this.setState({title: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price" className={styles.login_font_input}>가격</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      value={price} 
                      onChange={(e) => this.setState({price: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="discount_price" className={styles.login_font_input}>할인가격</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      value={discount_price} 
                      onChange={(e) => this.setState({discount_price: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category" className={styles.login_font_input}>카테고리</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      value={category} 
                      onChange={(e) => this.setState({category: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="size" className={styles.login_font_input}>사이즈 정보</label>
                  <textarea 
                      type="text" 
                      className={styles.textarea_form_control } 
                      value={size} 
                      onChange={(e) => this.setState({size: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="material" className={styles.login_font_input}>소재 정보</label>
                  <textarea 
                      type="text" 
                      className={styles.textarea_form_control } 
                      value={material} 
                      onChange={(e) => this.setState({material: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="info" className={styles.login_font_input}>옷 정보</label>
                  <textarea 
                      ref={this.textRef}
                      className={styles.textarea_form_control }
                      onKeyDown={this.textResize}
                      onKeyUp={this.textResize}
                      value={info}
                      wrap="hard"
                      onChange={(e) => this.setState({info: e.target.value})} 
                  />
                      
                </div>

                <br />

                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    onClick={this.handleComplete}
                  >
                    <span>완료</span>
                  </button>
                </div>
            </div>
          </div>
      </>
    )
  }
}
