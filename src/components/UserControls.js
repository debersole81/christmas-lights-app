import React from "react";
import PwrButtons from "./PwrButtons";
import Speed from "./Speed";


class UserControls extends React.Component {
      
    render() {
        return (
            <div>
                <h1>{this.Welcome}</h1>
                <PwrButtons pwrOff = {this.pwrOff} />
                <Speed />
            </div>
        );
    };
};

export default UserControls