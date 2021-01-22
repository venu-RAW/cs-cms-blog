import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "next/router";
import Layout from "../components/Layout";

class SingleStory extends Component {
	navigateBack = (event) => {
		this.props.router.back();
	};

	render() {
		let { users } = this.props;
		return (
			<>
				<h1>{users.name}</h1>
				<p>Some profile based information</p>
				<button onClick={this.navigateBack}>back</button>
			</>
		);
	}
}

export const getStaticProps = async (context) => {
	console.log("context", context);

	let { data } = await axios.get(`${url}?id=${context.params.id}`);
	console.log(data);

	try {
		const Stack = contentstack.Stack(
			process.env.API_KEY,
			process.env.DELIVERY_TOKEN,
			process.env.ENVIRONMENT_NAME
		);

		const Header = Stack.ContentType("cms_header_venu").Query();
		let header = await Header.where("title")
			.includeContentType()
			.includeCount()
			.toJSON()
			.find();

		return {
			props: {
				users: { ...data[0] },
			},
		};
	} catch (err) {
		console.log(err);
	}
};

export const getStaticPaths = async () => {
	try {
		const Stack = contentstack.Stack(
			process.env.API_KEY,
			process.env.DELIVERY_TOKEN,
			process.env.ENVIRONMENT_NAME
		);

		const Stories = Stack.ContentType("cms_blog_venu").Query();
		let stories = await Stories.where("title")
			.includeContentType()
			.includeCount()
			.toJSON()
			.find();

		let paths = stories[0].map((story) => {
			return {
				params: {
					id: `${story.uid}`,
				},
			};
		});
		return {
			paths,
			fallback: false,
		};
	} catch (err) {
		console.log(err);
	}
};

export default withRouter(SingleStory);
