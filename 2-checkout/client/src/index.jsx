import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx"

render(<App/>, document.getElementById("root"));

// line 2 imports ReactDOM.render which we normally use like this: (<App />, document.getElementById('app'));
// by creating App class component, we can mimic this syntax so that it is more familliar


// original code for reference:
// render(
//   <div>
//     <p>Hello, World!</p>
//     <p>
//       <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
//     </p>
//   </div>,
//   document.getElementById("root")
// );