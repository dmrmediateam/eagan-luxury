import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

// In demo builds (no env vars), provide a safe stub so imports won't crash
const isSanityConfigured = Boolean(projectId && dataset);

type StubPatchChain = {
    set: (doc: unknown) => { commit: () => Promise<never> };
};

const demoError = () =>
    new Error(
        "Sanity is disabled in this demo build (no projectId/dataset). Provide env vars to enable."
    );

const stubClient = {
    // image-url builder calls client.config() to read projectId/dataset
    config: () => ({ projectId: projectId ?? "demo", dataset: dataset ?? "production", apiVersion }),
    // Return empty arrays/objects so pages can render without data
    fetch: async () => [],
    create: async () => {
        throw demoError();
    },
    patch: (_id: string): StubPatchChain => ({
        set: (_doc: unknown) => ({
            commit: async () => {
                throw demoError();
            }
        })
    }),
    delete: async () => {
        throw demoError();
    }
} as unknown as ReturnType<typeof createClient>;

export const client = isSanityConfigured
    ? createClient({
            projectId,
            dataset,
            apiVersion,
            useCdn: false
        })
    : stubClient;

// For preview functionality
export const previewClient = isSanityConfigured
    ? createClient({
            projectId,
            dataset,
            apiVersion,
            useCdn: false,
            token: process.env.SANITY_API_TOKEN
        })
    : stubClient;

// Helper function to determine which client to use
export const getClient = (usePreview = false) =>
    usePreview ? previewClient : client;
