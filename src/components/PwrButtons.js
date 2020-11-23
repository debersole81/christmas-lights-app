import React from "react";


class PwrButtons extends React.Component {

    render() {
        return(
            <div>
                <button 
                    id="play"
                    type="button"
                    onClick={this.props.pwrOn}>
                On
                </button>
                <button
                    id="stop"
                    type="button"
                    onClick={this.props.pwrOff}>
                Off
                </button>
            </div>
        );
    };
       
};

export default PwrButtons