import { Resource } from "sst";
import type { Handler } from "aws-lambda";
import { Example } from "@sst-notes-app/core/example";

export const handler: Handler = async (_event) => {
	return {
		statusCode: 200,
		body: `${Example.hello()} Linked to ${Resource.Uploads.name}.`,
	};
};
