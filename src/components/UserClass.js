import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }

        console.log(props);
    }

    async componentDidMount(){
        console.log("Child Component did Mount");

        //API CALL IS MADE HERE
        const data=await fetch("https://api.github.com/users/saurabhrajani1704");
        const json= await data.json();
        
        this.setState({
           userInfo:json,
        });

        console.log(json);
    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("Component will unmount");

    }

    render(){
        return(
            <div className="user-card">
                <h2>Name:{this.state.userInfo.login}</h2>
                <h3>Location:{this.state.userInfo.type}</h3>
                <h4>Contact:{this.props.Contact} </h4>
            </div>
    
        );
    };

};

export default UserClass;