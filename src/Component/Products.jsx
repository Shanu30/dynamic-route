import React, { useState , useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Products() {
    const [products, setProduct] = useState([]);
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const handleClick = (id) => {
        navigate(`${pathname}/${id}`)
    }
    const getProduct = async()=>{
        try{
            const res = await fetch("http://localhost:3000/data");
            const data = await res.json();
            setProduct(data);
        }
        catch(err){
            alert("Error occure")
        }
    }
    useEffect(() => {
        getProduct();
    }, [])
    
  return (
    <div>
        <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>{
                        return(
                        <tr key = {product.id}>
                            <td>{product.name}</td>
                            <td>{product.id}</td>
                            <td>{product.price}</td>
                            <td><button onClick = {()=> handleClick(product.id)}>More Details</button></td>
                        </tr>
                        )})}
                </tbody>
            </table>
        
    </div>
  )
}
