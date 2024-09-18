import { config, fields, singleton } from "@keystatic/core";
import { getCollection } from "astro:content";
import React from "react";

const teas = await getCollection("teas");
const possibleBases = [
  ...teas[0].data
    .map((tea) => tea.base)
    .reduce((set, base) => set.add(base), new Set()),
];
const possibleTags = [
  ...teas[0].data
    .flatMap((tea) => tea.tags)
    .reduce((set, value) => set.add(value), new Set()),
];

export default config({
  storage: import.meta.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
    ? {
        kind: "github",
        repo: {
          owner: "TODO",
          name: "TODO",
        },
      }
    : { kind: "local" },
  ui: {
    brand: {
      name: "My Tea Menu",
      mark: () =>
        React.createElement("img", { src: "/favicon-32x32.png", height: 24 }),
    },
  },
  singletons: {
    teas: singleton({
      label: "Teas",
      path: "src/content/teas/teas",
      schema: {
        teas: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            tags: fields.array(
              fields.text({
                label: "Tag",
                description: `e.g. ${possibleTags.join(", ")}`,
              }),
              { label: "Tags", itemLabel: (props) => props.value },
            ),
            ingredients: fields.array(fields.text({ label: "Ingredient" }), {
              label: "Ingredients",
              itemLabel: (props) => props.value,
            }),
            muchCaffeine: fields.checkbox({ label: "Much caffeine?" }),
            type: fields.select({
              label: "Type of tea",
              options: [
                { label: "Bagged", value: "bag" },
                { label: "Loose-leaf", value: "loose" },
              ],
              defaultValue: "bag",
            }),
            base: fields.text({
              label: "Base",
              description: `e.g. ${possibleBases.join(", ")}`,
            }),
            inStock: fields.checkbox({
              label: "In stock?",
              defaultValue: true,
            }),
            brewTemp: fields.integer({ label: "Brew temperature (°C)" }),
            brewTime: fields.text({
              label: "Brew time",
              description: "e.g. 3--5 minutes",
            }),
            whereFrom: fields.text({
              label: "Where did it come from?",
              description: "e.g. Twinings",
            }),
          }),
          {
            itemLabel: (props) => props.fields.name.value,
          },
        ),
      },
    }),
  },
});
