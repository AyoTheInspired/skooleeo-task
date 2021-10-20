import "./App.css";
import Homepage from "./components/Homepage";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Router>
			<div className="app flexed">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/profile" component={UserProfile} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
