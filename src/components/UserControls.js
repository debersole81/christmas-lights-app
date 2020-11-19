import React from "react";
import PwrButtons from "./PwrButtons";
import Speed from "./Speed";


class UserControls extends React.Component {
    render() {
        return (
            <div>
                <PwrButtons />
                <Speed />
            </div>
        );
    };
};

export default UserControls