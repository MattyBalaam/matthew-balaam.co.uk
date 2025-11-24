import { z } from "zod";

export const zResume = z
  .object({
    basics: z.object({
      name: z.string(),
      label: z.string(),
      image: z.string(),
      email: z.email(),
      phone: z.string(),
      url: z.string(),
      summary: z.string(),
      location: z.object({
        address: z.string().optional(),
        postalCode: z.string().optional(),
        city: z.string().optional(),
        countryCode: z.string().optional(),
        region: z.string().optional(),
      }),
      profiles: z.array(
        z.object({
          network: z.string(),
          username: z.string(),
          url: z.string(),
        }),
      ),
    }),
    work: z.array(
      z.object({
        name: z.string().describe("e.g. Facebook"),
        location: z.string().optional(),
        // description: z.string(),
        position: z.string(),
        url: z.string().optional(),
        startDate: z.any().optional(),
        endDate: z.any().optional(),
        summary: z.string(),
        highlights: z.array(z.string()).optional(),
      }),
    ),
    education: z.array(
      z.object({
        institution: z.string().optional(),
        url: z.string().optional(),
        summary: z.string(),
        area: z.string().optional(),
        studyType: z.string().optional(),
        startDate: z.iso.date(),
        endDate: z.iso.date().optional(),
        score: z.string().optional(),
        courses: z.array(z.string()).optional(),
      }),
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
