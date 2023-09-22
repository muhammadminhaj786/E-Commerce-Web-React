import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Products = () => {
  let [data,setData] = useState([])
  
  const apiCall = async() =>{
    const data = await axios.get("https://fakestoreapi.com/products")
    setData(data.data)
    console.log(data.data)
  }

  useEffect(()=>{
    apiCall()
  },[])
  return (
    <>
    {
      data.map((prod,index)=>{
        return(
          console.log(prod?.title)
        )
      })
    }
    </>
  )
}

export default Products