
export const Contact =()=>{
    const style={
        width:"400px",
        border:"1px solid grey",
        backgroundColor:"wheat",
        margin:"4% 35%",fontSize:"18px",
        color:"black"
    }
    const icon={
        height:"25px",
        width: "25px",
    }
    const handleSend = ()=>{
        alert(`Thank you for Contacting !
                    We Will Catch Up Soon`)
    }
    return (
        <div style={style}>
            <label>Enter Name</label><br/>
            <input type="text" placeholder="enter your Name" /><br/>
            <label>Enter Email</label><br/>
            <input type="email" placeholder="enter your Email" /><br/>
            <label>Enter Number</label><br/>
            <input type="number" placeholder="enter your Number" /><br/>
            <br/>
            <button onClick={handleSend}>Send</button>
            <div style={{display:"flex",margin:"2%",justifyContent:"space-evenly"}}>
                <div style={{display:"flex"}}><img style={icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYK52_ZFCm6bR3KBEZu5JkgSk49qP-YCwrUak-Xv8IFl71pup-95_BkIM-HOmunsW0diM&usqp=CAU" alt="mobile"/> : 123456789</div>
                <div style={{display:"flex"}}><img style={icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnP8hDItqwPksz4nfUpwD8GTrfPNS0Zwuhz1Og_FCCSVX1tVk5AqOUJ5wTeVJ4dIvqj4&usqp=CAU" alt="email" /> : abc@gmail.com</div>
                
            </div>
        </div>
    )
}