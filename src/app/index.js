import React from "react";
//Importing render method for rendering purpose
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component{
	render(){
		return(
			// Use ClassName instead of class to use Boostrap since it's not HTML
			<div className="container">
				<div className = "row">
					<div>
						<div className = "col-xs-10 col-xs-offset-1">
							<Header/>
						</div>
						<div className = "col-xs-10 col-xs-offset-1">
							<Home/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));