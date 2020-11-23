import React from "react";
import Lights from "./components/Lights";
import Title from "./components/Title";
import UserControls from "./components/UserControls";



class App extends React.Component {
    constructor(props) {
        super(props); 
            this.state = {};
            this.pwrOn = this.pwrOn.bind(this);
            this.pwrOff = this.pwrOff.bind(this);
    };
        
    pwrOn = (e) => {
        console.log ("clicked on")
    }
    
    pwrOff = (e) => {
        console.log ("clicked off");        
    };

   
    render() {
        
        const pwrControls = {
            pwrOn: this.pwrOn,
            pwrOff: this.pwrOff
        };

        return(
            <div className="utilities">
                <Lights />
                <Title />
                <UserControls {...pwrControls} />
            </div>
        );
    };
};

export default App
