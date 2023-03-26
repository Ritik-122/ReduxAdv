import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { uiActions } from './store/redux';
let initialState=true
function App() {
  const isShowCart=useSelector((state)=>state.showCart.isShown)
  const cart=useSelector((state)=>state.cartItem.items)
  const alertMsg=useSelector((state)=>state.ui.alertmessage)
  const dispatch=useDispatch()
  
  
  
  useEffect(() => {
    async function postData(){
     
      const res=await fetch('https://redux-a236c-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(cart),
        mode:'cors',
        headers:{
          'Content-Type':'application/json'
        }
      })
      
      if(res.ok){
        const obj={
          title:'success',
          message:'sent cart data succesfully',
          status:'success'
        }
        if(initialState)
      {
        initialState=false;
        return;
      }
      dispatch(uiActions.showMessage(obj))
   
      }else{
        const obj={
          title:'Error!',
          message:'sending cart data failed!',
          status:'error'
        }
        dispatch(uiActions.showMessage(obj))

      }

    }
    if(cart.length!==0){
    postData()
    }
  
  }, [cart])

  return (
    <>
    {!initialState && <Notification status={alertMsg.status} title={alertMsg.title} message={alertMsg.message}/>}
    <Layout>
     {isShowCart && <Cart />}
      <Products />
    </Layout>
    </>

  );
}

export default App;
