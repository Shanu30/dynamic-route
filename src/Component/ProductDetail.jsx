import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const [details, setDetails] = useState([])
    const params = useParams();
    const getProduct = async()=>{
        try{
            const res = await fetch(`http://localhost:3000/data?id=${params.id}`);
            const data = await res.json();
            setDetails(data);
        }
        catch(err){
            alert("Error occure")
        }
    }
    useEffect(() => {
        getProduct();
    }, [])
    console.log(details)
  return (
    <div>
        {details.map((detail) => {
            return(
                <div key = {detail.id} style={{width:"50%",height:"150px",margin:" 50px auto",border:"1px solid red"}}>
                    <h1>{detail.name}</h1>
                    <h3>{detail.price}</h3>
                </div>
                
            )
        })}
    </div>
  )
}
