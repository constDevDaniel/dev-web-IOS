import "./App.css";
import { Component } from "react";
import Exemplo from "./Components/Example.jsx";
import Header from "./Components/Header.jsx";

export class App extends Component {
	render() {
		return (
			<div className="App">
				<Header nome="Daniel" />
				<Exemplo />
			</div>
		);
	}
}

export default App;
