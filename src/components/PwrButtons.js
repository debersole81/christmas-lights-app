import React from "react";


class PwrButtons extends React.Component {

//this will log to the console if I call it in the onClick event
// handlePwrOffChange = (e) => {
//     console.log("clicked");
// };


    render() {
        return(
            <div>
                <button 
                    id="play"
                    type="button"
                    >
                On
                </button>
                <button
                    id="stop"
                    type="button"
                    onClick={this.pwrOff}>
                Off
                </button>
            </div>
        );
    };
       
};

export default PwrButtons