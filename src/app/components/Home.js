import React from "react";

export class Home extends React.Component{
	render(){
		return(
			<div>
				<p> A new component</p>
				{/*props is included in the React component*/}
				<p> The user is : {this.props.name}, and the sex is :{this.props.sex}</p>	
			</div>
		);
	}
}

//Validation of propTypes

Home.propTypes = {
	name:React.PropTypes.string,
	sex:React.PropTypes.string
}