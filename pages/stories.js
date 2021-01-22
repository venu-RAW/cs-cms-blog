import Head from "next/head";

import Layout from "../components/Layout";
import StoriesComponent from "../components/StoriesComponent";
import getAllEntries from "../contentstack/getAllEntries";

export default function Home(props) {
	return (
		<div className="container">
			<Layout header={props.header} footer={props.footer}>
				<StoriesComponent stories={props.stories} />
			</Layout>
		</div>
	);
}	

export const getStaticProps = async () => {
	try {
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
