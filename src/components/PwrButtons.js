import React from "react";


class PwrButtons extends React.Component {

    render() {
        return(
            <div>
                <button 
                    id="play"
                    type="button"
                    onclick={this.handlePwrOnChange}>
                On
                </button>
                <button
                    id="stop"
                    type="button"
                    onclick={this.handlePwrOffChange}>
                Off
                </button>
            </div>
        );
    };
       
};

export default PwrButtons