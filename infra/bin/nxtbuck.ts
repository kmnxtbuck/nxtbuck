#!/usr/bin/env node
import "source-map-support/register";
import path from "path";
import dotenv from "dotenv";
import { App } from "aws-cdk-lib";
import { NxtbuckAmplifyStack } from "../lib/nxtbuck-amplify-stack";

// Load environment variables from repo root .env (and .env.local if present)
const repoRoot = path.join(__dirname, "..", "..");
dotenv.config({ path: path.join(repoRoot, ".env") });
dotenv.config({ path: path.join(repoRoot, ".env.local"), override: true });

const app = new App();

new NxtbuckAmplifyStack(app, "NxtbuckAmplifyStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

