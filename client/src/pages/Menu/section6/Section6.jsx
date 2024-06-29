import React, { useContext, useEffect } from 'react'
import "./section6.css"
import { ProductContext } from '../../../contexts/productContext';
import axios from 'axios';
const Section6 = () => {
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
                {product.slice(2,3).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(2,3).map((item) => (
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
                {product.slice(2,3).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(3,4).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(3,4).map((item) => (
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
                {product.slice(3,4).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(21,22).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(21,22).map((item) => (
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
                {product.slice(21,22).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(22,23).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(22,23).map((item) => (
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
                {product.slice(22,23).map((item) => (
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
                {product.slice(23,24).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(23,24).map((item) => (
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
                {product.slice(23,24).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(24,25).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(24,25).map((item) => (
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
                {product.slice(24,25).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(25,26).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(25,26).map((item) => (
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
                {product.slice(25,26).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(26,27).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(26,27).map((item) => (
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
                {product.slice(26,27).map((item) => (
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

export default Section6