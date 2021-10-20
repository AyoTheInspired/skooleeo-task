import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./context/provider/StateProvider";
import userInitialState from "./context/initialState/userInitialState";
import userReducer from "./context/reducer/userReducer";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={userInitialState} reducer={userReducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
