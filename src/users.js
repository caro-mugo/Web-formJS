import React from "react";
// import "./User.css";
// import Navbar
const data=[
    {
    "id":1,
    "userName":"Caroline",
    "country":"Kenya",
    },
{
    "id":3,
    "userName":"Nyambura",
    "country":"Tanzania",  
},
{
    "id":4,
    "userName":"Mugo",
    "country":"Uganda",  
},

]
     
     const User= ({email}) =>{
        return(
     <div>
        {data.map(item =><div
             style={{
                display:"flex", flexDirection:"column",
                border:"1px solid black", margin:"2%"
            }}
            key={item.id}>
                <h4>{item.userName}</h4>
               <p>{item.country}</p>
               </div>)}
               </div>
               )
               }
export default User;


