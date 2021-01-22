import React, { Component } from "react";
import { withRouter } from "next/router";

import getAllEntries from "../../contentstack/getAllEntries";
import getSingleEntry from "../../contentstack/getSingleEntry";

import SingleStoryComponent from "../../components/SingleStoryComponent";
import Layout from "../../components/Layout";

function SingleStory(props) {
	// let navigateBack = (event) => {
	// 	props.router.back();
	// };
	return (
		<Layout header={props.header} footer={props.footer}>
			<div className="container">
				{/* <button onClick={navigateBack}>Back</button> */}
				<SingleStoryComponent story={props.story} />
			</div>
		</Layout>
	);
}

export const getStaticProps = async (context) => {
	console.log("context:", context);

	try {
		let story = await getSingleEntry("cms_blog_venu", context.params.id);
		let header = await getAllEntries("cms_header_venu");
		let footer = await getAllEntries("cms_footer_venu");

		// console.log("Single story:-", story);

		return {
			props: {
				story: { ...story },
				header: [...header[0]],
				footer: [...footer[0]],
			},
		};
	} catch (err) {
		console.log(err);
	}
};

export const getStaticPaths = async () => {
	try {
		let stories = await getAllEntries("cms_blog_venu");

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
