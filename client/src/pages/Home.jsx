import React, { useContext } from 'react';
import '../pages/pagesStyle.css';
import { ProductContext } from '../contexts/productContext';
import { useEffect } from 'react';
import axios from 'axios'
import { Helmet } from 'react-helmet';
import Container from './Home/Container';
import Section2 from './Home/section2/Section2';
import Section3 from './Home/section3/Section3';
import Section4 from './Home/section4/Section4';

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
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Container/>
            <Section2/>
            <Section3/>
            <Section4/>
      
      {/* {product.map((item) => (
        <div key={item._id}>
          <p style={{color:"red"}}>{item.title}</p>
          <img className='imageproduct' src={item.image} alt="" />
          <p style={{color:"red"}}>{item.catagory}</p>
          <p style={{color:"red"}}>{item.price}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
