import Link from "next/link";

import styles from "../styles/SingleStory.module.css";

export default function SingleStoryComponent(props) {
	let story = props.story;
	return (
		<div className={styles.single_container}>
			{console.log("single component: ", props.story)}
			<div className={styles.story}>
				<div className={styles.story_image}>
					<img src={story.blog_image.url} alt={story.blog_author} />
				</div>
				<div className={styles.story_content}>
					<h1>{story.blog_author}</h1>
					<p>{story.blog_content}</p>
				</div>
			</div>
			<div className={styles.related_links}>
				<h2>Related Stories</h2>
				{story.related_blogs.map((link) => {
					return (
						<div key={link.uid} className={styles.single_link}>
							<div className={styles.image_div}>
								<img src={link.blog_image.url} alt={link.blog_author} />
							</div>
							<div className={styles.single_text}>
								<h4>{link.blog_author}</h4>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
