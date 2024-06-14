import React, { useContext } from 'react';
import '../pages/pagesStyle.css';
import { ProductContext } from '../contexts/productContext';
import { useEffect } from 'react';
import axios from 'axios'

const Home = () => {
  const { product,setProduct } = useContext(ProductContext);
const GetData=async()=>{
  const res=await axios.get('http://localhost:8080/products')
  setProduct(res?.data)
  console.log(res?.data);
}
useEffect(()=>{
  GetData()
},[])

  return (
    <div>
      {product.map((item) => (
        <div key={item._id}>
          <p style={{color:"red"}}>{item.title}</p>
          <img src={item.image} alt="" />
          <p style={{color:"red"}}>{item.catagory}</p>
          <p style={{color:"red"}}>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
