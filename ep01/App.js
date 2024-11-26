import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>ReactElement</span>

const Title = () => (
    <h1 className="head" tabIndex="5">    
        Namaste React
    </h1>
); 

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Func Component</h1>
    </div>
); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
