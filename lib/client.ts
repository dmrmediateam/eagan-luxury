import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

const isSanityConfigured = Boolean(projectId && dataset);

type StubPatchChain = {
	set: (doc: unknown) => { commit: () => Promise<never> };
};

const demoError = () =>
	new Error(
		"Sanity is disabled in this demo build (no projectId/dataset). Provide env vars to enable."
	);

const stubClient = {
	config: () => ({
		projectId: projectId ?? "demo",
		dataset: dataset ?? "production",
		apiVersion
	}),
	fetch: async () => [],
	create: async () => {
		throw demoError();
	},
	patch: (_id: string): StubPatchChain => {
		void _id;
		return {
			set: (_doc: unknown) => {
				void _doc;
				return {
					commit: async () => {
						throw demoError();
					}
				};
			}
		};
	},
	delete: async () => {
		throw demoError();
	}
} as unknown as ReturnType<typeof createClient>;

export const client = isSanityConfigured
	? createClient({ projectId, dataset, apiVersion, useCdn: false })
	: stubClient;

export const previewClient = isSanityConfigured
	? createClient({
			projectId,
			dataset,
			apiVersion,
			useCdn: false,
			token: process.env.SANITY_API_TOKEN
		})
	: stubClient;

export const getClient = (usePreview = false) =>
	usePreview ? previewClient : client;
