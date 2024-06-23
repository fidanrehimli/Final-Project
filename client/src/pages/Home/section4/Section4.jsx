import React, { useContext, useEffect } from "react";
import "./section4.css";
import { FaStar } from "react-icons/fa";
import { ProductContext } from "../../../contexts/productContext";
import axios from "axios";



const Section4 = () => {
    const {product,setProduct} = useContext(ProductContext)

    const GetData = async()=>{
        const res = await axios.get("http://localhost:8080/products");
        setProduct(res?.data)
    }
useEffect(()=>{
    GetData()
},[])
  return (
    <div className="section4">
      <div>
        <img
          className="sec4image"
          src="https://freebw.com/templates/royate/images/feature.jpg"
          alt=""
        />
      </div>

      <div className="sec4right">
        <h1 className="sec4text">
          BEEF STEAK WITH GREEN <br />
          -$45
        </h1>
        <p className="sec4param">
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself,
          <br />
          because it is pain, but because occasionally circumstances occur in
          which toil and
          <br />
          pain can procure him some great pleasure. To take a trivial example,
          which of us
          <br />
          ever undertakes laborious physical exercise, except to obtain some
          advantage
          <br />
          from it? But who has any right to find fault with a man who chooses to
          enjoy a<br />
          pleasure that has no annoying consequences, or one who avoids a pain
          that
          <br />
          produces no resultant pleasure
        </p>
        <div className="staricon">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
     <div className="sec4card">
     {product.slice(0, 3).map((item) => (
              <div key={item._id}>
                <div className="menucart">
                    <img className="sec4images" src={item.image} alt="" />
                  <h1 className="sec4title">{item.title}</h1>
                  <p className="sec4price">${item.price}</p>
                </div>
              </div>
            ))}

     </div>
      </div>
    </div>
  );
};

export default Section4;
