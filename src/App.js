import React, { Component } from "react";
import Header from "./Header";
import JSON from "./db.json";
import NewsList from "./news_list";

class App extends Component {
	state = {
		news: JSON
	};

	render() {
		console.log(JSON);
		return (
			<div>
				<Header />
				<NewsList news={this.state.news} />
			</div>
		);
	}
}

export default App;
