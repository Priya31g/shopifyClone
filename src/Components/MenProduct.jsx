import { useEffect, useState } from "react"
import "./MenProduct.css";
import {Link} from "react-router-dom"

export const MenProduct =()=>{

    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/men's clothing`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setProduct(res)
        })
    },[])

    return (
        <div className="backGround">
            <div className="mainCont ">
                {product.map((e)=>{
                    return <div key={e.id} className="product_div">
                        <img className="product_img" src={e.image} alt="product Image"/>
                        <h3>{e.title}</h3>
                        <h5 className="price h5">Price : ${e.price}</h5>
                        <Link to ={`/mens/${e.id}`}>More ...</Link>
                    </div>

                })}


            </div>
        </div>
    )
}