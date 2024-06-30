import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "../contexts/productContext";
import axios from 'axios';

import "./pagesStyle.css"
import Section1 from "./About/section1/Section1";
import Section2 from "./About/section2/Section2";
const About = () => {
  const navigate = useNavigate()
  const {product,setProduct} = useContext(ProductContext)

  const GetData = async()=>{
    const res = await axios.get("http://localhost:8080/products")
    setProduct(res?.data)
  }
  useEffect(()=>{
    GetData()
  },[])
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Section1/>
      <Section2/>
    </div>
  )
};

export default About;
