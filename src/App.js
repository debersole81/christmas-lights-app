import React from "react";
import Lights from "./components/Lights";
import Title from "./components/Title";
import UserControls from "./components/UserControls";



class App extends React.Component {
    render() {
        return(
            <div className="utilities">
                <Lights />
                <Title />
                <UserControls />    
            </div>
        );
    };
};

export default App
