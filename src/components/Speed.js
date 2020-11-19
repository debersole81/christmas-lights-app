import React from "react";

class Speed extends React.Component {
    render () {
        return (
            <div>
                <label>
                    Speed:{" "}
                    <input
                        type="number"
                        name="speed"
                        placeholder="From 1 to 5."
                    />
                </label>
            </div>
        );
    };
};

export default Speed