import React from "react";
import styles from "../styles/Footer.module.css";

export default function FooterComponent(props) {
	return (
		<div className={styles.footer}>
			{console.log(props)}
			<div className={styles.footer_content}>
				<p>{props.footer.copyright}</p>
				<div className={styles.social_media}>
					<ul className={styles.social_icons}>
						{props.footer.social_icons.map((link) => {
							return (
								<li key={link.social_title}>
									<a href={link.social_link}>
										<img
											src={link.social_url}
											alt={link.social_title}
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
