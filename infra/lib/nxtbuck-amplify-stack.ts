import { SecretValue, Stack, StackProps } from "aws-cdk-lib";
import { BuildSpec } from "aws-cdk-lib/aws-codebuild";
import { Construct } from "constructs";
import * as amplify from "@aws-cdk/aws-amplify-alpha";

/**
 * Amplify Hosting stack for SSR Next.js deployment.
 * Note: requires a GitHub personal access token stored in Secrets Manager.
 */
export class NxtbuckAmplifyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const githubOwner = requireEnv("GITHUB_REPO_OWNER");
    const githubRepo = requireEnv("GITHUB_REPO_NAME");
    const githubBranch = requireEnv("GITHUB_BRANCH");
    const githubTokenSecretName = requireEnv("GITHUB_TOKEN_SECRET_NAME");

    const amplifyApp = new amplify.App(this, "NxtbuckAmplifyApp", {
      appName: "nxtbuck",
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: githubOwner,
        repository: githubRepo,
        oauthToken: SecretValue.secretsManager(githubTokenSecretName),
      }),
      buildSpec: BuildSpec.fromObject({
        version: "1.0",
        frontend: {
          phases: {
            preBuild: {
              commands: [
                "nvm install 20",
                "nvm use 20",
                "corepack enable",
                "corepack prepare pnpm@10.23.0 --activate",
                "pnpm install --frozen-lockfile",
              ],
            },
            build: {
              commands: ["pnpm build"],
            },
          },
          artifacts: {
            // Amplify auto-detects Next.js SSR; .next is fine
            baseDirectory: ".next",
            files: ["**/*"],
          },
          cache: {
            paths: ["node_modules/**/*", ".next/cache/**/*"],
          },
        },
      }),
      customRules: [
        // Ensure clean URLs
        amplify.CustomRule.SINGLE_PAGE_APPLICATION_REDIRECT,
      ],
      environmentVariables: {
        NODE_ENV: "production",
      },
    });

    const branch = amplifyApp.addBranch(githubBranch, { branchName: githubBranch });

    // Map custom domain: nxtbuck.com and www.nxtbuck.com
    const domain = amplifyApp.addDomain("nxtbuck.com");
    domain.mapRoot(branch);
    domain.mapSubDomain(branch, "www");
  }
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

