import React, { useContext, useEffect } from "react";
import "./product.css";
import axios from "axios";
import { ProductContext } from "../../context/ProductContext";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductAdd = () => {
  const {products,setProducts,productId,setProductId,imageValue,setImgVal,titleValue,setTitleVal,catagoryValue,setCatagoryVal,priceValue,setPriceVal}=useContext(ProductContext)
  const GetData=async()=>{
    const res=await axios.get('http://localhost:8080/products')
    setProducts(res?.data)
    console.log(res?.data);
  }
  useEffect(()=>{
    GetData()
  },[])
  const DeleteData=async(id)=>{
    await axios.delete(`http://localhost:8080/products/${id}`)
    GetData()
  }
   
   const CreateData = async (e) => {
  try {
  e.preventDefault()
    await axios.post('http://localhost:8080/products',{
      image:imageValue,
      title:titleValue,
      catagory:catagoryValue,
      price:priceValue
    });
    GetData();
    toast.success('Successfully added a product!', { position: toast.POSITION_RIGHT });
  } catch (error) {
    console.error('Error adding product:', error);
    toast.error('Failed to add product. Please try again later.', { position: toast.POSITION_RIGHT });
  }
};
    const UpdateData=(image,title,catagory,price,id)=>{
      setImgVal(image),
      setTitleVal(title),
      setCatagoryVal(catagory),
      setPriceVal(price),
      setProductId(id)
    }
    const HandleUpdate=async()=>{
      await axios.put(`http://localhost:8080/products/${productId}`,{
       image:imageValue,
       title:titleValue,
       catagory:catagoryValue,
       price:priceValue
      })
    GetData();
   
  }
//! artirma
    const handleIncrease = (id) => {
      const updatedProducts = products.map((prod) => {
        if (prod._id === id) {
          return { ...prod, quantity: (prod.quantity || 0) + 1 };
        }
        return prod;
      });
      setProducts(updatedProducts);
    };
//!azaltma
    const handleDecrease = (id) => {
      const updatedProducts = products.map((prod) => {
        if (prod._id === id && prod.quantity > 0) {
          return { ...prod, quantity: prod.quantity - 1 };
        }
        return prod;
      });
      setProducts(updatedProducts);
    };
    const getQuantity = (id) => {
      const product = products.find((prod) => prod._id === id);
      return product ? product.quantity || 0 : 0;
    };
   
  return (
    <div>
      <div className="containerForm">
        <ToastContainer/>
        <div className="text">Add your wishes
        </div>
        <div className="formBox">
          <form action="" onSubmit={CreateData}>
              <input className="Inp" required value={imageValue} onChange={(e)=>setImgVal(e.target.value)}  placeholder="Image" />
             <br />
              <input className="Inp" required value={titleValue} onChange={(e)=>setTitleVal(e.target.value)} placeholder="Title" />
             <br />
              <input className="Inp" required value={catagoryValue} onChange={(e)=>setCatagoryVal(e.target.value)} placeholder="Catagory"  />
             <br />
              <input className="Inp" required value={priceValue} onChange={(e)=>setPriceVal(e.target.value)} placeholder="Price" />
            <div>
              <button type='submit' className="Submit_btn" onClick={HandleUpdate}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className='Carts'>
     {
      products.map((elem)=>(
        <div className='ProductCart' key={elem._id}>
          <img  src={elem.image} alt="" />
         <div className="card-content">
         <h3>{elem.title}</h3>
          <p>{elem.catagory}</p>
          <p className='Price'>${elem.price}</p>
          
            {/* Artırma ve Azaltma Butonları */}
        <div className='QuantityControls'>
          <button className='QuantityBtn' onClick={() => handleDecrease(elem._id)}> - </button>
          <span className='Quantity'>{getQuantity(elem._id)}</span>
          <button className='QuantityBtn' onClick={() => handleIncrease(elem._id)}> + </button>
        </div>

           <div className='DetailSection'>
            <button className='Update'
            onClick={()=>UpdateData(elem.image,elem.title,elem.catagory,elem.price,elem._id)}
            >Update</button>
           <div className='Icons'>
            <button className='DeleteBtn' onClick={()=>DeleteData(elem._id)}>
            <MdDelete />
            </button>
           </div>
           </div>
         </div>
        </div>
      ))
     }
   </div>
    </div>
  );
};

export default ProductAdd;
