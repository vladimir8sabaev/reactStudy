import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";

const text = "Hello world";
function sum() {
	return 30;
}
const elem = (
	<div>
		<h2 tabIndex={0}>Text: {text + " " + sum()}</h2>
		<input type="text" />
		<button>Click</button>
	</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);
