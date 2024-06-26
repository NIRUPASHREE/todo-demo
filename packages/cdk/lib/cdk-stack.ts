import * as cdk from "aws-cdk-lib";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import type { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		new nodejs.NodejsFunction(this, "HelloHandler", {
			entry: "../lambda/src/handlers/helloHandler.ts",
		});
	}
}
