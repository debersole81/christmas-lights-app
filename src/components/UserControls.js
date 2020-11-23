import React from "react";
import PwrButtons from "./PwrButtons";
import Speed from "./Speed";


class UserControls extends React.Component {
      
    render() {
        return (
            <div className="usercontrols">
                <h1>{this.Welcome}</h1>
                <PwrButtons pwrOn={this.props.pwrOn} pwrOff={this.props.pwrOff} />
                <Speed setSpeed={this.props.setSpeed} />
            </div>
        );
    };
};

export default UserControls