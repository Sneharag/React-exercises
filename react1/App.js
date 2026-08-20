
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

const parent = React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement(
        "div",
        {id: "child1",key: "child1"},
        [React.createElement("h1", {key: "h1"}, "This is H1"),
        React.createElement("h2", {key: "h2"}, "This is H2")
    ]),
     React.createElement(
        "div",
        {id: "child2",key: "child2"},
        [React.createElement("h1", {key: "h1"}, "This is H1"),
        React.createElement("h2", {key: "h2"}, "This is H2")
    ])
]
);
console.log(parent);



const heading = React.createElement(
    "h2", 
    {id:"heading"}, 
    "Hello Jayy!!");
console.log(heading);  //js object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);




