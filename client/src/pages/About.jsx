import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "../contexts/productContext";
import axios from 'axios';

import "./pagesStyle.css"
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
      {/* <div className="Products">
        {product.map((elem) => (
          <div className="product" key={elem._id}>
            <img src={elem.image} className="card-img" alt="" />
            <div className="content">
              <div className="row">
                <div className="detail">
                  <h2 className="card-title">{elem.title}</h2>
                  <p className="card-info">{elem.catagory}</p>
                </div>
                <p className="card-price">${elem.price}</p>
                <button onClick={()=>navigate(elem._id)}>book now</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
};

export default About;
