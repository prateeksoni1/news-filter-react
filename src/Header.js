import React, { Component } from "react";
import "./css/styles.css";

class Header extends Component {
	state = {
		word: "restinpeace"
	};

	inputChangeHandler = (event) => {
		this.setState({
			word: event.target.value
		});
	};
	render() {
		return (
			<header>
				<div className="logo">Logo</div>
				<input type="text" onChange={this.inputChangeHandler} />
			</header>
		);
	}
}

export default Header;
