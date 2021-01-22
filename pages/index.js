import Head from "next/head";

import Layout from "../components/Layout";
import getAllEntries from "../contentstack/getAllEntries";

export default function Home(props) {
	return (
		<Layout header={props.header} footer={props.footer}>
			<div className="container">
				<h1>Home Page</h1>
			</div>
		</Layout>
	);
}

export const getStaticProps = async () => {
	try {
		let header = await getAllEntries("cms_header_venu");
		let footer = await getAllEntries("cms_footer_venu");

		return {
			props: {
				header: [...header[0]],
				footer: [...footer[0]],
			},
		};
	} catch (err) {
		console.log(err);
	}
};
