import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

const Layout = (props) => {
	return (
		<>
			{console.log("New Stack Props from Layout", props)}
			<Header header={props.header[0]} />
			{props.children}
			<Footer footer={props.footer[0]} />
		</>
	);
};

export default Layout;
