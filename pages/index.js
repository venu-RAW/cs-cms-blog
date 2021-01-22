import Head from "next/head";

// import contentstack from "contentstack";

// import HeaderComponent from "../components/HeaderComponent";
// import FooterComponent from "../components/FooterComponent";

import StoriesComponent from "../components/StoriesComponent";
import Layout from "../components/Layout";

import getAllEntries from "../contentstack/getAllEntries";

export default function Home(props) {
	return (
		<div className="container">
			{console.log(props)}
			{/* <HeaderComponent header={props.header} /> */}
			<Layout header={props.header} footer={props.footer}>
				<StoriesComponent stories={props.stories} />
			</Layout>
			{/* <FooterComponent header={props.footer} /> */}
		</div>
	);
}

export const getStaticProps = async () => {
	try {
		// const Stack = contentstack.Stack(
		// 	process.env.API_KEY,
		// 	process.env.DELIVERY_TOKEN,
		// 	process.env.ENVIRONMENT_NAME
		// );

		// const Header = Stack.ContentType("cms_header_venu").Query();
		// let header = await Header.where("title")
		// 	.includeContentType()
		// 	.includeCount()
		// 	.toJSON()
		// 	.find();

		// const Stories = Stack.ContentType("cms_blog_venu").Query();
		// let stories = await Stories.where("title")
		// 	.includeContentType()
		// 	.includeCount()
		// 	.toJSON()
		// 	.find();

		// const Footer = Stack.ContentType("cms_footer_venu").Query();
		// let footer = await Footer.where("title")
		// 	.includeContentType()
		// 	.includeCount()
		// 	.toJSON()
		// 	.find();

		let header = await getAllEntries("cms_header_venu");
		let stories = await getAllEntries("cms_blog_venu");
		let footer = await getAllEntries("cms_footer_venu");

		return {
			props: {
				header: [...header[0]],
				stories: [...stories[0]],
				footer: [...footer[0]],
			},
		};
	} catch (err) {
		console.log(err);
	}
};
