import React, { useContext, useEffect } from 'react'
import "./section4.css"
import { ProductContext } from '../../../contexts/productContext';
import axios from 'axios';
const Section4 = () => {
    const { product, setProduct } = useContext(ProductContext);

    const getData = async () => {
      const res = await axios.get("http://localhost:8080/products");
      setProduct(res?.data);
    };
    useEffect(() => {
      getData();
    }, []);
  return (
    <div>
         <div className="soups-card">
        <div className="soups-left">
        <div className="display">
              <div>
                {product.slice(16,17).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(16,17).map((item) => (
                  <div key={item._id}>
                    <h1 className="menu-title">{item.title}</h1>
                    <p className="menu-param">{item.catagory}</p>
                  </div>
                ))}
              </div>
              <div className="menu-point">
                <p>........................................</p>
              </div>
              <div>
                {product.slice(16,17).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(17,18).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(17,18).map((item) => (
                  <div key={item._id}>
                    <h1 className="menu-title">{item.title}</h1>
                    <p className="menu-param">{item.catagory}</p>
                  </div>
                ))}
              </div>
              <div className="menu-point">
                <p>........................................</p>
              </div>
              <div>
                {product.slice(17,18).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(18,19).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(18,19).map((item) => (
                  <div key={item._id}>
                    <h1 className="menu-title">{item.title}</h1>
                    <p className="menu-param">{item.catagory}</p>
                  </div>
                ))}
              </div>
              <div className="menu-point">
                <p>........................................</p>
              </div>
              <div>
                {product.slice(18,19).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(19,20).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(19,20).map((item) => (
                  <div key={item._id}>
                    <h1 className="menu-title">{item.title}</h1>
                    <p className="menu-param">{item.catagory}</p>
                  </div>
                ))}
              </div>
              <div className="menu-point">
                <p>........................................</p>
              </div>
              <div>
                {product.slice(19,20).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className="soups-right">
        <div className="display">
              <div>
                {product.slice(5,6).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(5,6).map((item) => (
                  <div key={item._id}>
                    <h1 className="menu-title">{item.title}</h1>
                    <p className="menu-param">{item.catagory}</p>
                  </div>
                ))}
              </div>
              <div className="menu-point">
                <p>........................................</p>
              </div>
              <div>
                {product.slice(5,6).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(4,5).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(4,5).map((item) => (
                  <div key={item._id}>
                    <h1 className="menu-title">{item.title}</h1>
                    <p className="menu-param">{item.catagory}</p>
                  </div>
                ))}
              </div>
              <div className="menu-point">
                <p>........................................</p>
              </div>
              <div>
                {product.slice(4,5).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(13,14).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(13,14).map((item) => (
                  <div key={item._id}>
                    <h1 className="menu-title">{item.title}</h1>
                    <p className="menu-param">{item.catagory}</p>
                  </div>
                ))}
              </div>
              <div className="menu-point">
                <p>........................................</p>
              </div>
              <div>
                {product.slice(13,14).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(14,15).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(14,15).map((item) => (
                  <div key={item._id}>
                    <h1 className="menu-title">{item.title}</h1>
                    <p className="menu-param">{item.catagory}</p>
                  </div>
                ))}
              </div>
              <div className="menu-point">
                <p>........................................</p>
              </div>
              <div>
                {product.slice(14,15).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section4