
import React from "react";
//Importing render method for rendering purpose
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			homeLink:Home //Inital name of the home link
		}
	}
	greeting(){
		alert("What's Up?");
	}

	changeLinkName(newName){
		this.setState({
			homeLink:newName
		});
	}
	render(){
		return(
			// Use ClassName instead of class to use Boostrap since it's not HTML
			<div className="container">
				<div className = "row">
					<div>
						<div className = "col-xs-10 col-xs-offset-1">
							<Header homeLink={this.state.homeLink}/>
						</div>
						<div className = "col-xs-10 col-xs-offset-1">
							<Home name ={"User1"} 
								  initialAge ={20} 
								  greet={this.greeting}
								  changeLinkName={this.changeLinkName.bind(this)}
								  initialLinkName={this.state.homeLink}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));


