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
            this.setSpeed = this.setSpeed.bind(this);
    };
        
    pwrOn = (e) => {
        // console.log ("clicked on")
        let circleElements = document.getElementsByClassName("circle");
        let len = circleElements.length;

        for(let i = 0; i < len; i++) {
            circleElements[i].removeAttribute("style");
            circleElements[i].animationPlayState = "running";
            circleElements[i].WebkitAnimationPlayState = "running";
        }; //for loop
    }; //pwrOn function
    
    pwrOff = (e) => {
        // console.log ("clicked off");
        let circleElements = document.getElementsByClassName("circle");
        let len = circleElements.length;
                     
        for (let i = 0; i < len; i++) {
            circleElements[i].style.animation = "none";
            circleElements[i].style.background = "#563260";
        }; //for loop        
        
        document.getElementById("title").className = "titleoff";

    }; //pwrOff function

    setSpeed = (e) => {
        console.log ("clicked run button");
        let circleElements = document.getElementsByClassName("circle");
        let speed = document.getElementById("quantity").value;
        let len = circleElements.length;

        for (let i = 0; i < len; i++) {
            circleElements[i].style.animationDuration = speed + "s";
        };//for loop
    };//setSpeed function

   
    render() {
        
        const pwrControls = {
            pwrOn: this.pwrOn,
            pwrOff: this.pwrOff,
            setSpeed: this.setSpeed
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
