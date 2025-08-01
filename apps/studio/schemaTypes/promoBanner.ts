import { defineType } from "sanity";

export const promoBannerSchema = defineType({
  name: "promoBanner",
  title: "Promo Banner",
  description: "Top one will be displayed",
  type: "document",
  fields: [
    {
      name: "en_heading1",
      title: "English 1st Heading Text",
      type: "string",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "en_heading2",
      title: "English 2nd Heading Text",
      type: "string",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "it_heading1",
      title: "Italian 1st Heading Text",
      type: "string",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "it_heading2",
      title: "Italian 2nd Heading Text",
      type: "string",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "de_heading1",
      title: "German 1st Heading Text",
      type: "string",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "de_heading2",
      title: "German 2nd Heading Text",
      type: "string",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "en_description",
      title: "English Description",
      type: "text",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "it_description",
      title: "Italian Description",
      type: "text",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "de_description",
      title: "Germany Description",
      type: "text",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      }
    },
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
  ]
});

export const schemaTypes = [
  promoBannerSchema
]