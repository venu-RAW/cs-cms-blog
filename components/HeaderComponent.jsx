import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function HeaderComponent(props) {
	return (
		<nav className={styles.nav_bar}>
			<div className={styles.nav_bar__content}>
				<h1>{props.header.header_logo}</h1>
				<ul className={styles.nav_links}>
					{props.header.header_link.map((link) => {
						return (
							<li key={link.title}>
								<Link href={link.href} className={styles.nav_item}>
									{link.title}
								</Link>
							</li>
						);
					})}
				</ul>
				<div className={styles.hamburger}>
					<span className={styles.hamLine1}></span>
					<span className={styles.hamLine2}></span>
					<span className={styles.hamLine3}></span>
				</div>
			</div>
		</nav>
	);
}
