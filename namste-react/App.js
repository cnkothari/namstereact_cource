import React from "react";
import  ReactDOM from "react-dom/client";

const elm = <span>Element </span>

const title =  (
    <h1 className="head" tabIndex="5">
          React Using JSX !
    </h1>
);

const number = 1000;

const HeadingComponent = () => (
    <div id ="container">
        <h2>{number}</h2>
        <h2>{100 +200}</h2>
        
        {title}
        <h1 className="heading" >
             Namste React Functional component!
        </h1>

    </div>
);

const root =  ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<HeadingComponent />);
