import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemService from '../../service/item/Item.service'
import AuthService from '../../service/user/Auth.service'
import Footer from '../components/Footer'
import Header from '../components/header'
import { BASKET_ADD_USER_REQUEST, BASKET_GET_REQUEST } from '../reducers/item'

const help = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('')
  const [localItem, setLocalItem] = useState(false);

  useEffect(() => {
    const userLocalData = AuthService.getCurrentUser();
    const itemLocalData = ItemService.getCurrentItem();

    if (userId.length === 0 && userLocalData !== null) {
        setUserId(userLocalData.id);
    }
    if (!localItem && itemLocalData !== null) {
        setLocalItem(itemLocalData)
    }
  }, [userId,localItem]);
  
  console.log("userId : " , userId);
  useEffect(() => {
    console.log("localItem : ", localItem);
      if(userId !== '' && localItem.length > 0) {
          
          dispatch({
              type: BASKET_ADD_USER_REQUEST,
              userId: userId,
              data: localItem
          })

          localStorage.setItem("localRecentProduct", JSON.stringify([]));
      }
  },[userId,localItem])

    return (
      <>
      <Header />
        <div>Help</div>
        <button>아아</button>
        <form>
          <button>나나</button>
        </form>
      <Footer />
      </>
  )
}

export default help;

