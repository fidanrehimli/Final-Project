import React, { useContext, useEffect } from 'react'
import "./section8.css"
import { ProductContext } from '../../../contexts/productContext'
import axios from 'axios'
const Section8 = () => {
    const {product,setProduct} = useContext(ProductContext)

    const getData = async()=>{
        const res = await axios.get("http://localhost:8080/products")
        setProduct(res?.data)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
<div className="soups-card">
        <div className="soups-left">
        <div className="display">
              <div>
                {product.slice(6,7).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(6,7).map((item) => (
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
                {product.slice(6,7).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(7,8).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(7,8).map((item) => (
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
                {product.slice(7,8).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(27,28).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(27,28).map((item) => (
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
                {product.slice(27,28).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(28,29).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(28,29).map((item) => (
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
                {product.slice(28,29).map((item) => (
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
                {product.slice(29,30).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(29,30).map((item) => (
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
                {product.slice(29,30).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(30,31).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(30,31).map((item) => (
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
                {product.slice(30,31).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(31,32).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(31,32).map((item) => (
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
                {product.slice(31,32).map((item) => (
                  <div key={item._id}>
                    <p className="menu-price">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="display">
              <div>
                {product.slice(32,33).map((item) => (
                  <div key={item._id}>
                    <img className="card-image" src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <div>
                {product.slice(32,33).map((item) => (
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
                {product.slice(32,33).map((item) => (
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

export default Section8