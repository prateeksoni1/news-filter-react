import React, { Component } from "react";
import Header from "./Header";
import JSON from "./db.json";
import NewsList from "./news_list";

class App extends Component {
	state = {
		news: JSON,
		filtered: []
	};

	getKeywords = (event) => {
		let value = event.target.value;
		let filtered = this.state.news.filter((item) => {
			return item.title.indexOf(value) > -1;
		});
		this.setState({
			filtered: filtered
		});
	};

	render() {
		console.log(JSON);
		return (
			<div>
				<Header keywords={this.getKeywords} />
				<NewsList
					news={
						this.state.filtered.length === 0
							? this.state.news
							: this.state.filtered
					}
				/>
			</div>
		);
	}
}

export default App;
