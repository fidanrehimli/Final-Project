import React, { useContext, useEffect } from "react";
import "./section3.css";
import { ProductContext } from "../../../contexts/productContext";
import axios from "axios";
const Section3 = () => {
  const { product, setProduct } = useContext(ProductContext);

  const GetData = async () => {
    const res = await axios.get("http://localhost:8080/products");
    setProduct(res?.data);
    console.log(res?.data);
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="section3">
      <div className="MENU">
        <h1 className="menutext">OUR FOOD MENU</h1>
        <h2 className="menuparag">~ See what we offer ~</h2>
      </div>
      <div className="menu-course">
        <div>
          <div className="meat">
            <h1 className="main-course">MAIN COURSE</h1>
            <img
              className="meatimage"
              src="https://freebw.com/templates/royate/images/main-course.png"
              alt=""
            />
          </div>
          <div className="meatcard">
            {product.slice(0, 1).map((item) => (
              <div key={item._id}>
                <div className="carddisplay">
                  <h1 className="titletext">{item.title}</h1>
                  <p className="pricetext">${item.price}</p>
                </div>
                <p className="categorytext">{item.catagory}</p>
              </div>
            ))}
          </div>
          <div>
          {product.slice(1, 2).map((item) => (
              <div key={item._id}>
                <div className="carddisplay">
                  <h1 className="titletext">{item.title}</h1>
                  <p className="pricetext">${item.price}</p>
                </div>
                <p className="categorytext">{item.catagory}</p>
              </div>
            ))}
          </div>
<div>
          <div className="drinks">
                <h1 className="drink">DRINKS</h1>
                <img className="drinkimage" src="https://freebw.com/templates/royate/images/drinks.png" alt="" />
          </div>
          {product.slice(2,3).map((item) => (
              <div key={item._id}>
                <div className="carddisplay">
                  <h1 className="titletext">{item.title}</h1>
                  <p className="drinkprice">${item.price}</p>
                </div>
                <p className="categorytext">{item.catagory}</p>
              </div>
            ))}
          </div>
          <div>
          {product.slice(3,4).map((item) => (
              <div key={item._id}>
                <div className="carddisplay">
                  <h1 className="titletext">{item.title}</h1>
                  <p className="appledrink">${item.price}</p>
                </div>
                <p className="categorytext">{item.catagory}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
<div>
<div className="soups">
            <h1 className="main-course">SOUPS & SALADS</h1>
            <img
              className="meatimage"
              src="https://freebw.com/templates/royate/images/soups-and-salads.png"
              alt=""
            />
          </div>
          <div className="soupcard">
            {product.slice(4, 5).map((item) => (
              <div key={item._id}>
                <div className="carddisplay">
                  <h1 className="titletext">{item.title}</h1>
                  <p className="soupprice">${item.price}</p>
                </div>
                <p className="categorytext">{item.catagory}</p>
              </div>
            ))}
          </div>
          {product.slice(5, 6).map((item) => (
              <div key={item._id}>
                <div className="carddisplay">
                  <h1 className="titletext">{item.title}</h1>
                  <p className="soupprice">${item.price}</p>
                </div>
                <p className="categorytext">{item.catagory}</p>
              </div>
            ))}
</div>
<div>
<div className="dessert">
                <h1 className="drink">DESSERTS</h1>
                <img className="dessertimage" src="https://freebw.com/templates/royate/images/desserts.png" alt="" />
          </div>
          {product.slice(6,7).map((item) => (
              <div key={item._id}>
                <div className="carddisplay">
                  <h1 className="titletext">{item.title}</h1>
                  <p className="dessertprice">${item.price}</p>
                </div>
                <p className="categorytext">{item.catagory}</p>
              </div>
            ))}
</div>
{product.slice(7, 8).map((item) => (
              <div key={item._id}>
                <div className="carddisplay">
                  <h1 className="titletext">{item.title}</h1>
                  <p className="dessertsprice">${item.price}</p>
                </div>
                <p className="categorytext">{item.catagory}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
