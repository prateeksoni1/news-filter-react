import React from "react";

const NewsItem = ({ data }) => {
	return (
		<div {...news_item}>
			<h2>{data.title}</h2>
			<p>{data.feed}</p>
		</div>
	);
};

export default NewsItem;
