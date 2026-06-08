import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const [search,setsearch]=useState('');
    const [showsearch,setshowsearch]=useState(false);
    const [cart,setcart]=useState({});
    const [products,setproducts]=useState([]);
    const [token,settoken]=useState('')
    const navigate=useNavigate();
    const addToCart=async(itemId,size)=>{
       if(!size){
         toast.error("Please Select Size");
       }
      let cartData=structuredClone(cart);
      if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size]+=1;
        }
        else{
            cartData[itemId][size]=1;
        }
      }
      else{
          cartData[itemId]={};
          cartData[itemId][size]=1;
      }
      setcart(cartData);
      if(token){
        try{
          await axios.post(backendUrl + '/api/cart/add',{itemId,size},{headers:{token}})
        }
        catch(error){
            console.log(error);
            toast.error(error.message);
        }
      }
    }
    const cartCount=()=>{
        let totalcount=0;
        for(const items in cart){
          for(const item in cart[items]){
            try{
                if(cart[items][item]>0){
                    totalcount+=cart[items][item];
                }
            }
            catch(error){
                console.log(error);
            }
          }
        }
        return totalcount;
    }
    const updateQuantity=async(itemId,size,quantity)=>{
        let cartData=structuredClone(cart);
        cartData[itemId][size]=quantity;
        setcart(cartData);
        if(token){
          try{
            await axios.post(backendUrl + '/api/cart/update',{itemId,size,quantity},{headers:{token}})
          }
          catch(error){
            console.log(error);
            toast.error(error.message);
          }
        }
    }
    const cartTotal=()=>{
        let totalamount=0;
        for(const items in cart){
            let itemInfo=products.find((product)=>product._id===items);
            for(const item in cart[items]){
                try{
                    if(cart[items][item]>0){
                      totalamount+=itemInfo.price*cart[items][item];
                    }
                }
                catch(error){
                    console.log(error);
                }
            }
        }
        return totalamount;
    }
    const getProductdata=async()=>{
        try{
          const response=await axios.get(backendUrl + '/api/product/list');
          if(response.data.success){
            setproducts(response.data.products);
          }
          else{
            toast.error(response.data.message);
          }
        }
        catch(error){
            toast.error(error.message);
        }
    }
    
    const getUserCart=async(token)=>{
        try{
          const response=await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}});
          if(response.data.success){
            setcart(response.data.cartData);
          }
        }
        catch(error){
            console.log(error);
        }
    }

    const getCart=async(token)=>{
      try{
        const response=await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}});
        if(response.data.success){
          setcart(response.data.cartData);
        }
      }
      catch(error){
        console.log(error);
        toast.error(error.message);
      }
    }

    useEffect(()=>{
        getProductdata()
    },[])
    useEffect(()=>{
       if(!token && localStorage.getItem('token')){
        settoken(localStorage.getItem('token'))
        getCart(localStorage.getItem('token'))
       }
    },[])
    
    useEffect(()=>{
        if(token){
            getUserCart(token);
        }
    },[token])
    const value = {
        products, currency, delivery_fee,
        search,setsearch,showsearch,setshowsearch,cart,setcart,addToCart,cartCount,updateQuantity,cartTotal,navigate,backendUrl,token,settoken
    }
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;