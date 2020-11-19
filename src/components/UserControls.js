import React from "react";
import PwrButtons from "./PwrButtons";
import Speed from "./Speed";

const circle = document.getElementsByClassName("circle");




class UserControls extends React.Component {
    render() {
        return (
            <div>
                <PwrButtons circle={circle} />
                <Speed circle={circle} />
            </div>
        );
    };
};

export default UserControls