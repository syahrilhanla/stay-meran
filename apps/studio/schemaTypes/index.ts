import { accommodationSchema } from "./accommodation";
import { gallerySchema } from "./gallery";
import { heroSchema } from "./hero";
import { promoBannerSchema } from "./promoBanner";
import { sectionHeaderSchema as testimonialHeaderSchema, testimonialSchema } from "./testimonial";

export const schemaTypes = [
  heroSchema,
  accommodationSchema,
  gallerySchema,
  testimonialSchema,
  testimonialHeaderSchema,
  promoBannerSchema
  // Add other schema types here as needed
]
