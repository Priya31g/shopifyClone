import { Link } from "react-router-dom";
import "./Home.css";
export const Home=()=>{

    return (
        <div className="backGround">
            <div className="text_div">
                <Link to="/mens"><h4 >1. Men's Clothing</h4></Link>
               <div>
                   <img className="blog_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTRVWpnuAhOjzZzup22MmjCHXIJ0B5wmIKjkjWtJij5xYuEUB_N9_ex_mYbNWaXaNxQQ&usqp=CAU" alt="Mens Fashion"/>
                   <p className="reason">Appearances matter in real and fundamental ways that affect a man's daily life – from how he is greeted when meeting others for the first time to whether or not he'll be harassed while traveling.<br/>A man doesn't need to stay on top of every passing trend; however he should thinking about his basic appearance every day. </p>
               </div>
            </div>

            <div className="text_div">
               <Link to="/women"> <h4 >2. Women's Clothing</h4></Link>
               <div>
                   <img className="blog_img" src="https://i.pinimg.com/originals/ae/8b/a7/ae8ba78b7be130e1afdf659947735128.jpg" alt="Mens Fashion"/>
                   <p className="reason"> To some of us, clothing can be a form of expression as articulate as a poem or equation. It can be a way of life, and even a profession. Fashion is an art form, a glimpse into someone’s personality. Fashion is full of seriousness, playfulness, a conception of distraction, entertainment, exhibition. Fashion is an individual’s statement of self-expression.<br/>Of course, the meaning behind fashion is not a simple question to answer. What fashion means to one person will be completely different than the next. </p>
               </div>
            </div>
        </div>
    )

}