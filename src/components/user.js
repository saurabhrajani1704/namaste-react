import { useState } from "react";
const User =(props)=>{
    const [count]=useState(1);
    const [count2]=useState(2);
    return(
        <div className="user-card">
            <h1>Count={count}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @iamSumeet09</h4>
        </div>

    );
};

export default User;