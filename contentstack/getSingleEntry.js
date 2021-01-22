import Stack from "./Stack";

export default async function getSingleEntry(contentType, id) {
	console.log(contentType);

	try {
		const Stories = Stack.ContentType(contentType)
			.Entry(id)
			.includeReference("related_blogs");

		let result = await Stories.fetch();
		let story = await result.toJSON();

		return story;
	} catch (err) {
		console.log(err);
	}
}
