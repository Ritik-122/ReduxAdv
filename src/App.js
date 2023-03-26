import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { cartItemActions, uiActions } from "./store/redux";


let isInitial=true
let fetchInitial=0
function App() {
  const isShowCart = useSelector((state) => state.showCart.isShown);
  const cart = useSelector((state) => state.cartItem.items);
  const alertMsg = useSelector((state) => state.ui.alertmessage);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetching(){
     
      if(fetchInitial===0)
      {
         const obj = {
        title: "Please wait",
        message: "fetching Data....",
        status: "success",
      };
      fetchInitial+=1
      dispatch(uiActions.showMessage(obj));
      
      }
     

      const res = await fetch(
        "https://redux-a236c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(res.ok){
        const data=await res.json()
       
        if(data.length!==0)
        dispatch(cartItemActions.replaceCart(data))
      }

    }
    
   fetching()    
   
   
  }, [])
  


  useEffect(() => {
    async function postData() {
      if (isInitial){
        isInitial=false
        return
      }
     fetchInitial+=1
    
      

      const res = await fetch(
        "https://redux-a236c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        if (fetchInitial>2){
        const obj = {
          title: "success",
          message: "sent cart data succesfully",
          status: "success",
        };

        dispatch(uiActions.showMessage(obj));
      }} else {
        const obj = {
          title: "Error!",
          message: "sending cart data failed!",
          status: "error",
        };
        dispatch(uiActions.showMessage(obj));
      }
    }
    
      postData();
   
  }, [cart, dispatch]);

  return (
    <>
     { !isInitial && <Notification
        status={alertMsg.status}
        title={alertMsg.title}
        message={alertMsg.message}
      />}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
