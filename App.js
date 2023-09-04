// const heading = React.createElement("h1", { id: "heading" }, "Hello from React");
const parent = React.createElement(
    "div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "innerH1" },
            "Parent > Child > H1"),
        React.createElement("h2", { id: "innerH1" },
            "Parent > Child > H2")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", { id: "innerH1" },
            "Parent > Child > H1"),
        React.createElement("h2", { id: "innerH1" },
            "Parent > Child > H2")])
    ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);