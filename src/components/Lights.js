import React from "react";

      

class Lights extends React.Component {
    render() {
        return(
            <div className = "main">
                <div id="circle" className="circle red"></div>
                <div id="circle" className="circle yellow"></div>
                <div id="circle" className = "circle blue"></div>
                <div id="circle" className = "circle green"></div>
                <div id="circle" className = "circle red"></div>
                <div id="circle" className = "circle yellow"></div>
                <div id="circle" className = "circle blue"></div>
                <div id="circle" className = "circle green"></div>
            </div>
        );
    };
};

export default Lights