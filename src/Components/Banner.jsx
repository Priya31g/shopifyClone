import { useEffect, useState } from "react"



 export const Banner =()=>{
    const image=[
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ud9bnsySa3i8L6olEwwzsrO7qzSJFtwkTcKagqJCR7TwXPIXchNJIOlUc0FQkfumzxA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-W8ceGdynQH45hvSE6mUy0WmYd1OQmnHWeFgYkspf5lZgvMtsLD9abFSGnOaxT21ptM&usqp=CAU"
    ]
    const [showImg,setShowImge] = useState("");
    const [i,setI] = useState(0);
    const style = {
        height:"250px",
        width:"100%",
        margin:"0%",
        marginTop:"-1%",
        marginBottom:"-2%"
    }
    useEffect(()=>{
        setInterval(() => {
            if(i===image.length)
            setI(0)
            else{
                setShowImge(image[i]);
               setI(i+1);
            }
        }, 10000);
           
    },[image])
        return (
           
                <img style={style} src={showImg} alt="Banner"/>
           
        )
 } 