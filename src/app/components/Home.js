import React from "react";

export class Home extends React.Component{
	constructor(props){
		super();
		//props.age is the passed from outside
		this.state = {
			age:props.initialAge,
			homeLink:props.initialLinkName
		};
	}

	increaseAge(){
		this.setState({
			age: this.state.age + 1
		}); 
	}
	changeName(){
		this.props.changeLinkName(this.state.homeLink);
	}

	handleChange(event){
		this.setState({
			homeLink: event.target.value
		}); 
	}

	render(){
		return(
			<div>
				<p> A new component</p>
				{/*props is included in the React component*/}
				<p> The user is : {this.props.name}, and the age is :{this.state.age}</p>	
				<hr/>
				<button onClick = {this.increaseAge.bind(this)} className="btn btn-primary">Increase my age!</button>
				<hr/>
				<button onClick = {this.props.greet}className="btn btn-primary">Greet me!</button>
				<hr/>
				<input type = "text" value={this.state.homeLink} 
									 onChange={(event) => this.handleChange(event)}/>
				<button onClick = {this.changeName.bind(this)} className="btn btn-primary">Change header link</button>
			</div>
		);
	}
}

//Validation of propTypes

Home.propTypes = {
	name:React.PropTypes.string,
	initialAge:React.PropTypes.number,
	greet:React.PropTypes.func,
	initialLinkName:React.PropTypes.string
}