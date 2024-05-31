export const handler = async (event: unknown): Promise<object> => {
	console.log("Hello, world!");
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: "Hello, world!",
		}),
	};
};
