import Head from "next/head";

import Layout from "../components/Layout";
import getAllEntries from "../contentstack/getAllEntries";
import styles from "../styles/Home.module.css";
// import banner_image from "../public/path.png";

export default function Home(props) {
	return (
		<Layout header={props.header} footer={props.footer}>
			<div className="container">
				<div
					style={{
						backgroundImage: `url(${props.header[0].banner_image.url})`,
					}}
					className={styles.banner_image}
				></div>
				<div className={styles.banner_content}>
					<h1>Escape</h1>
					<p>Find Some Best Place to Get Lost</p>
				</div>
				<div className={styles.overlay}></div>
			</div>
		</Layout>
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
