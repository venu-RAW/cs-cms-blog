import contentstack from "contentstack";

// const Stack = Contentstack.Stack({
// 	api_key: process.env.API_KEY,
// 	delivery_token: process.env.DELIVERY_TOKEN,
// 	environment: process.env.ENVIRONMENT_NAME,
// 	region: "us",
// });

const Stack = contentstack.Stack(
	process.env.API_KEY,
	process.env.DELIVERY_TOKEN,
	process.env.ENVIRONMENT_NAME
);

export default Stack;
