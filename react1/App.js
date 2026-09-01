// ------Nested ReactElement------
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement("h1", {}, "This is H1"),
//         React.createElement("h2", {}, "This is H2")
//     ])
// );
// console.log(parent);

import React from "react";
import ReactDOM from "react-dom/client";

// ------ReactElement---------
// const heading = React.createElement(
//     "h2", 
//     {id:"heading"}, 
//     "Hello Jayy!!");
// console.log(heading);  //js object

// ---------JSX--------
//JSX => transpiled before it reches the JS - Parcel - Babel
//JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)
// const jsxheading = (
//     <h1 className="head">Good morning</h1>
// );
// console.log(jsxheading);


// -------React Component--------
const Title = () =>(
    <h1 className="head" tabIndex='5'>
        React using JSX
    </h1>
);

const HeadingComponent = () => (
    <div id='container'>
        <Title />
        <h1>Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);




