import React, { useContext, useEffect } from "react";
import "./section2.css";
import { ProductContext } from "../../../contexts/productContext";
import axios from "axios";
const Section2 = () => {
    const {product,setProduct}=useContext(ProductContext)

    const getData = async()=>{
        const res = await axios.get("http://localhost:8080/products")
        setProduct(res?.data)
        console.log(res?.data);
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <section className="section2">
      <div>
        <div className="coursetext">
          <h1>MAIN COURSE</h1>
          <p className="courseparam">~Qualities in each dish~</p>
        </div>

        <div className="menu-card">
          <div className="left-card">
            <div className="display">
                <div>
                    {product.slice(8,9).map((item)=>(
                        <div key={item._id}>
                            <img src={item.image} alt="" />
                        </div>
                    ))}
                </div>
                <div>
                {product.slice(8,9).map((item)=>(
                        <div key={item._id}>
                            <h1>{item.title}</h1>
                            <p>{item.catagory}</p>
                        </div>
                    ))}
                </div>
                <div>
                {product.slice(8,9).map((item)=>(
                        <div key={item._id}>
                            <p>${item.price}</p>
                        </div>
                    ))}
                </div>


            </div>
          </div>

          <div className="right-card"></div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
