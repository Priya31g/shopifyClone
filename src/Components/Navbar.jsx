import { Link } from "react-router-dom"
import "./Navbar.css"
export const Navbar=()=>{

    return (
        <div className="navbar">
            <div>
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8RX6MI_5pA54Fib-yd-gUGuvlIxszYnWmwL-VsDQR-aJ4PAoZlKjbbGuowBWSREbKAho&usqp=CAU" alt="logo"/>
            </div>
            <div className="flex justify large_nav">
                 <div className="nav_div"> 
                        <Link to="/mens"> <p className="link_decor">
                             Men's Clothing</p></Link>
                 </div>
                 <div className="nav_div">  <Link to="/women">      
                 <p className="link_decor">women's Clothing</p></Link> </div>
                 <div>
                     <img className="cart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbxl_H_K-vu_4LILYJUz-APBGlwFRsQHssSbRgjEtdpTV1C4XhY83_PByWefwo2qRq_U&usqp=CAU" alt="cart"/>
                 </div>
            </div>
          
            
        </div>
    )
}