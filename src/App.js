import React from "react";
import Lights from "./components/Lights";
import Title from "./components/Title";
import UserControls from "./components/UserControls";



class App extends React.Component {
    constructor(props) {
        super(props); 
            this.state = {};
            this.pwrOff = this.pwrOff.bind(this);
    };
        
    
    //I have been unable to get functions to pass down the component tree. I've tried variables and they work. Stumped.

    pwrOff = (e) => {
        console.log ("clicked");        
    };

   
    render() {
        
        // const pwrControls = {
        //     handlePwrOnChange: this.handlePwrOnChange,
        //     handlePwrOffChange: this.handlePwrOffChange
        // };

        return(
            <div className="utilities">
                <Lights />
                <Title />
                <UserControls pwrOff={this.pwrOff} />
            </div>
        );
    };
};

export default App
