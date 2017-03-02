import React from "react";
//Importing render method for rendering purpose
import {render} from "react-dom";

class App extends React.Component{
	render(){
		return(
			<div>
				<h1>Hello</h1>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));