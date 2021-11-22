import { useEffect, useState } from "react"
import { useParams } from "react-router";
import "./MenProductDetails.css"

export const WoMenProductDetaiils =()=>{
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setProduct(res)
        })
        
    },[])
        return(
            <div className="container">
              
                   <h1>{product.title}</h1>
                   <img src={product.image} className="large_img" alt="product image" />
                   <p className="price font_price"> Price :{" "} ${product.price}</p>
                    <p className="description ">
                        <h6>Product Description : </h6>
                        {product.description}</p>
                    <div className="flex justify">
                        <h3>Rating : {" "} {product.rating.rate}</h3>
                        <h3>Count : {" "} {product.rating.count}</h3>
                    </div>
            </div>
        )
}