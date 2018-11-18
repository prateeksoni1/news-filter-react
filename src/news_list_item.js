import React from "react";
import styles from "./css/styles.css";

const NewsItem = ({ data }) => {
	return (
		<div className={styles.news_item}>
			<h2>{data.title}</h2>
			<p>{data.feed}</p>
		</div>
	);
};

export default NewsItem;
