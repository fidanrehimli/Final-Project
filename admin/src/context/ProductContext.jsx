import { createContext, useState } from "react";

export const ProductContext = createContext()
export const ProductProvider=({children})=>{
 const [products,setProducts]=useState([])
 const [productId,setProductId]=useState("")
 const [imageValue,setImgVal]=useState("")
 const [titleValue,setTitleVal]=useState("")
 const [catagoryValue,setCatagoryVal]=useState("")
 const [priceValue,setPriceVal]=useState("")

 return (
    <ProductContext.Provider  value={{products,setProducts,productId,setProductId,imageValue,setImgVal,titleValue,setTitleVal,catagoryValue,setCatagoryVal,priceValue,setPriceVal}}>
        {children}
    </ProductContext.Provider>
 )
}