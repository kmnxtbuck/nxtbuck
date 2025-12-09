import { defineBackend } from "@aws-amplify/backend";

/**
 * Amplify Gen 2 entrypoint. Add backend resources (auth, data, storage, etc.)
 * by importing their resource definitions and passing them into defineBackend.
 * For hosting-only apps, keep this minimal and let Amplify manage hosting.
 */
export const backend = defineBackend({});

