import { Link } from "react-router-dom"
import "./Footers.css"
export const Footers =()=>{


    return (
        <div className="bg_green">
            <div className="flex justify social_div">
                <img className="social_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdXI2O7VqUWcr0nd-6KcyyNfritpfXnbyRdhXM8Rh3_tNdLkGzJ8qJRXdmXbkJGi1Nc4&usqp=CAU" alt="instagram"/>
                <img className="social_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfqffS9MB--u7RjFjQUHVU3WmxEuiDMSAAin79Rn-40H5aHjtGZ7X317LXYj6gIx9oT0&usqp=CAU" alt="twitter"/>
                <img className="social_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFC-cDajKNnIDhwQWvftMb4SFMRHCD0zv7HZ6iUgYTPnhCuUfSfTjH4EO_-l0LIuF2UCE&usqp=CAU" alt="whatsapp"/>
                <img className="social_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtgpH_nu_-yGR3ywFagUnaiXQjBnR6ylZjJPcZbxCu0gCHE6FLdj37zmaVDGnf8RQxsM&usqp=CAU" alt="youtube"/>
                <img className="social_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_F6_sFCGG9VApUPId-0urFJ9I14vqoQ-OR6f3S79IW1W_ynnyV-Z_WOSdImDqEaE8Vk&usqp=CAU" alt="pinintres"/>
                <img className="social_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppoCT_91hnghxkPB3muC1H2ZjwTZ_KX-gk_rarVI2F5EOmDfISh-5kwJ3Om1LLKA055M&usqp=CAU" alt="facebook"/>
            </div>
            <div className="footers_div flex justify ">
                <Link to="/faq"><p className="link_decor">FAQ</p> </Link>
                <Link ><p className="link_decor">JOBS</p> </Link>
                <Link to="/contact"><p className="link_decor">Contact us</p> </Link>
            </div>
        </div>
    )

}