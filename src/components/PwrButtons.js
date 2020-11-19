import React from "react";


class PwrButtons extends React.Component {

    render() {
        return(
            <div>
                <button 
                    id="play"
                    type="button"
                    onclick={handlePwrOnChange}>
                On
                </button>
                <button
                    id="stop"
                    type="button"
                    onclick={handlePwrOffChange}>
                Off
                </button>
            </div>
        );
    };
       
};

export default PwrButtons