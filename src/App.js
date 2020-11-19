import React from "react";
import Lights from "./components/Lights";
import Title from "./components/Title";
import UserControls from "./components/UserControls";



class App extends React.Component {
constructor() {
    super();
        this.state = {}

    handlePwrOnChange = (e) => {
        let circle = document.getElementById("circle");
        if (e.target.id === "play") {
            circle.style.animationPlayState("running");
        }
    };

    handlePwrOffChange = (e) => {
        let circle = document.getElementById("circle");
        if (e.target.id === "stop") {
            circle.style.animation("none");
            circle.style.background("#563260");
        };
    };
};


    render() {
        
        const pwrControls = {
            handlePwrOnChange: this.handlePwrOnChange,
            handlePwrOffChange: this.handlePwrOffChange
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
