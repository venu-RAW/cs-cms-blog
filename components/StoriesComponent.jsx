import styles from "../styles/Stories.module.css";
import Link from "next/link";

export default function StoriesComponent(props) {
	let stories = props.stories;
	return (
		<>
			{/* {console.log("Stories: ", stories)} */}
			<div className={styles.blog_container}>
				{stories.map((story) => {
					return (
						<Link
							href={`/stories/${story.uid}`}
							className={styles.blog_author__link}
						>
							<div className={styles.blog_card} key={story.uid}>
								<div className={styles.blog_image}>
									<img src={story.blog_image.url} alt={story.title} />
								</div>
								<div className={styles.blog_content}>
									<p id={story.uid} className={styles.blog_author}>
										{story.title}
									</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
}
