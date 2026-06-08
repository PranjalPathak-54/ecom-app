import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Text from '../components/Text'
import Productitem from '../components/Productitem';
import { assets } from '../assets/assets';

const Collections = () => {
  const {products,search,showsearch}=useContext(ShopContext);
  const [showfilter,setshowfilter]=useState(true);
  const [filter,setfilter]=useState([]);
  const [category,setcategory]=useState([]);
  const [subCategory,setsubCategory]=useState([]);
  const [sortType,setsortType]=useState('relevant');
  const togglecategory=(e)=>{
    if(category.includes(e.target.value)){
      setcategory(prev=>prev.filter(item=>item!==e.target.value));
    }
    else{
      setcategory(prev=>[...prev,e.target.value]);
    }
  }
  const togglesubcategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setsubCategory(prev=>prev.filter(item=>item!==e.target.value));
    }
    else{
      setsubCategory(prev=>[...prev,e.target.value]);
    }
  }
  const applyFilter=()=>{
    let productsCopy=products.slice();
    if(showsearch&&search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory));
    }
    setfilter(productsCopy);
  }
  const sortproduct=()=>{
    let fpcopy=filter.slice();
    switch(sortType){
      case'low-high':
        setfilter(fpcopy.sort((a,b)=>(a.price-b.price)));
        break;
      case'high-low':
        setfilter(fpcopy.sort((a,b)=>(b.price-a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }
  useEffect(()=>{
    setfilter(products);
  },[products])
  useEffect(()=>{
    applyFilter();
  },[category,subCategory,products,search,showsearch,products])
  useEffect(()=>{
    sortproduct();
  },[sortType])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        <div className='min-w-60'>
          <p onClick={()=>{setshowfilter(!showfilter)}} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showfilter?'rotate-90':''}`} src={assets.dropdown_icon}/>
          </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter?'':'hidden'} block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
           <p className='flex gap-2'>
             <input className='w-3' type="checkbox" onChange={togglecategory} value={'Men'}/>MEN
           </p>
           <p className='flex gap-2'>
             <input className='w-3' type="checkbox"  onChange={togglecategory} value={'Women'}/>WOMEN
           </p>
           <p className='flex gap-2'>
             <input className='w-3' type="checkbox"onChange={togglecategory} value={'Kids'}/>KIDS
           </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter?'':'hidden'} block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
           <p className='flex gap-2'>
             <input className='w-3' type="checkbox" onChange={togglesubcategory} value={'Topwear'} />TOPWEAR
           </p>
           <p className='flex gap-2'>
             <input className='w-3' type="checkbox" onChange={togglesubcategory} value={'Bottomwear'}/>BOTTOMWEAR
           </p>
           <p className='flex gap-2'>
             <input className='w-3' type="checkbox" onChange={togglesubcategory} value={'Winterwear'}/>WINTERWEAR
           </p>
          </div>
        </div>
        </div>
        <div className='flex-1'>
          <div className='flex justify-between tetx-base sm:text-2xl mb-4'>
              <Text text1={'ALL'} text2={'COLLECTIONS'}/>
              <select onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                <option value="relevant">Sort by:relevant</option>
                <option value="low-high">Sort by:Low to High</option>
                <option value="high-low">Sort by:High to Low</option>
              </select>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
                filter.map((item,index)=>(
                  <Productitem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))
              }
          </div>
        </div>
    </div>
  )
}

export default Collections