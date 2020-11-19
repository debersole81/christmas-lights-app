import React from "react";

class Speed extends React.Component {
    render () {
        return (
            <div>
                <label>
                    Speed:{" "}
                    <input
                        type="number"
                        id="quantity"
                        name="speed"
                        value=""
                        placeholder="From 1 to 5."
                    />
                    {" "}
                    <input
                        type="submit"
                        id="submit"
                        name="run"
                        value="RUN"
                    />                                
                </label>
            </div>
        );
    };
};

export default Speed