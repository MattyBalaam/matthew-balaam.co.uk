import { z } from "zod";

export const zResume = z
	.object({
		basics: z.object({
			name: z.string(),
			label: z.string(),
			image: z.string(),
			email: z.string().email(),
			phone: z.string(),
			url: z.string(),
			summary: z.string(),
			location: z.object({
				address: z.string().optional(),
				postalCode: z.string().optional(),
				city: z.string().optional(),
				countryCode: z
					.string()

					.optional(),
				region: z
					.string()

					.optional(),
			}),
			profiles: z.array(
				z
					.object({
						network: z.string().optional(),
						username: z.string().optional(),
						url: z.string().optional(),
					})
					.catchall(z.any()),
			),
		}),
		work: z.array(
			z
				.object({
					name: z.string().describe("e.g. Facebook"),
					location: z.string().optional(),
					description: z.string().optional(),
					position: z.string().optional(),
					url: z.string().optional(),
					startDate: z.any().optional(),
					endDate: z.any().optional(),
					summary: z.string().optional(),
					highlights: z.array(z.string()),
				})
				.catchall(z.any()),
		),
		education: z.array(
			z
				.object({
					institution: z.string().optional(),
					url: z.string().optional(),
					area: z.string().optional(),
					studyType: z.string().optional(),
					startDate: z.any().optional(),
					endDate: z.any().optional(),
					score: z
						.string()

						.optional(),
					courses: z
						.array(z.string())

						.optional(),
				})
				.catchall(z.any()),
		),
		skills: z
			.array(
				z.object({
					name: z.string(),
					level: z.string().optional(),
					keywords: z.array(z.string().describe("e.g. HTML")),
				}),
			)
			.nonempty(),
		languages: z
			.array(
				z
					.object({
						language: z.string().describe("e.g. English, Spanish").optional(),
						fluency: z.string().describe("e.g. Fluent, Beginner").optional(),
					})
					.catchall(z.any()),
			)

			.optional(),
		interests: z
			.array(
				z
					.object({
						name: z.string().optional(),
						keywords: z.array(z.string()).optional(),
					})
					.catchall(z.any()),
			)
			.optional(),
		references: z
			.array(
				z
					.object({
						name: z.string().describe("e.g. Timothy Cook").optional(),
						reference: z
							.string()

							.optional(),
					})
					.catchall(z.any()),
			)

			.optional(),
	})
	.strict();

export type Resume = z.infer<typeof zResume>;
