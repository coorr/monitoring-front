export default function ItemBasket() {
    const basketLocalItem = JSON.parse(localStorage.getItem('localRecentProduct'));
  
    if (basketLocalItem) {
      return  basketLocalItem;
  
    } else {
      return {};
    }
  }
  