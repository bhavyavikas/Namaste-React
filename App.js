import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀🚀")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
const title =(
<h2 className="title">Title inside Heading</h2>
)

const number=100;
const HeadingComponent = ()=>{
    return (
        <div>
    <h1>Namaste React</h1>
        {title}
        <h3>{number}</h3>
        <h3>{100+200}</h3>
        <h3>{console.log("1A2B3C")}</h3>
    </div>
    )
}

const jsxHeading = (
<h1 className="heading"
>Hello🚀👐</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)