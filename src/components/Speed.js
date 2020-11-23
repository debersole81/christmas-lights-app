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
                        defaultValue= ""
                        placeholder="From 1 to 5."
                    />
                    {" "}
                    <input
                        type="submit"
                        id="submit"
                        name=""
                        value="RUN"
                        onClick={this.props.setSpeed}
                    />                                
                </label>
            </div>
        );
    };
};

export default Speed