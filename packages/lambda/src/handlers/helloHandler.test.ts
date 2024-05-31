import { describe, expect, test } from "vitest";
import { handler } from "./helloHandler";

describe("helloHandler", () => {
	test("happy pass", async () => {
		const event = {}; // Provide any necessary event data for testing
		const expectedResponse = {
			statusCode: 200,
			body: JSON.stringify({
				message: "Hello, world!",
			}),
		};

		const response = await handler(event);

		expect(response).toEqual(expectedResponse);
	});
});
