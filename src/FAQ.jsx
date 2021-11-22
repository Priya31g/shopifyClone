import { Link } from "react-router-dom"


export const FAQ = ()=>{
    const style={
        width:"700px",
        border:"1px solid grey",
        
        margin:"4% 25%",fontSize:"18px",
        color:"black",
        textAlign:"left"
    }
    const border={
        border: "1px solid grey"
    }
    const left ={
        textAlign:"right",
        right:"500px",
        margin: "2% 10%"
    }
    return (
        <div >
                <div style={left}>
                    <h4>If Still Doubt, Please Reach Out to us At : 
                    <Link to="/contact">Contact Us</Link>
                    </h4>
                </div>

                <div style={style}>
                    <div>
                    <h4>Q : Why do I see different prices for the same product?</h4>
                    <div style={border}>You could see different prices for the same product, as it could be listed by many Sellers.</div>
                    </div>
                    <div>
                    <h4>Q : Is installation offered for all products?</h4>
                    <div style={border}>You could see different prices for the same product, as it could be listed by many Sellers.</div>
                    </div>
                    <div>
                    <h4>Q : Is it necessary to have an account to shop on Shopify?</h4>
                    <div style={border}>Yes, it's necessary to log into your Flipkart account to shop. Shopping as a logged-in user is fast & convenient and also provides extra security.<br/>You'll have access to a personalised shopping experience including recommendations and quicker check-out.</div>
                    </div>
                    <div>
                    <h4>Q : What is the 'Save Card' feature?</h4>
                    <div style={border}>The 'Save Card' option lets you save your credit/debit cards on your Flipkart account. This helps you complete your transactions in a quick and easy way.</div>
                    </div>
                   
                </div>

        </div>
    )

}