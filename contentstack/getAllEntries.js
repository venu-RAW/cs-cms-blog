import Stack from "./Stack";

export default async function getAllEntries(contentType) {
	console.log(contentType);

	try {
		const Query = Stack.ContentType(contentType).Query();

		let result = await Query.where("title")
			.includeContentType()
			.includeCount()
			.toJSON()
			.find();

		return result;
	} catch (err) {
		console.log(err);
	}
}
