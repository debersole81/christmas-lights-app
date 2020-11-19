import React from "react";
import PwrButtons from "./PwrButtons";
import Speed from "./Speed";

const circle = document.getElementsByClassName("circle");




class UserControls extends React.Component {
    render() {
        return (
            <div>
                <Speed circle={circle} />
                <PwrButtons circle={circle} />
            </div>
        );
    };
};

export default UserControls