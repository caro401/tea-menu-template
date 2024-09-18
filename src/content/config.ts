import { defineCollection, z } from "astro:content";

const teaCollection = defineCollection({
  type: "data",
  schema: z
    .strictObject({
      teas: z.array(
        z.strictObject({
          name: z.string(),
          tags: z.array(z.string()),
          ingredients: z.array(z.string()).optional(),
          muchCaffeine: z.boolean(),
          type: z.literal("bag").or(z.literal("loose")),
          base: z.string().toLowerCase(),
          inStock: z.boolean(),
          brewTemp: z.number().int(),
          brewTime: z.string(),
          whereFrom: z.string().optional(),
        }),
      ),
    })
    .transform((data) => data.teas),
});

export const collections = {
  teas: teaCollection,
};
