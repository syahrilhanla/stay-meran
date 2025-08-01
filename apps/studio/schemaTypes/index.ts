import { accommodationSchema } from "./accommodation";
import { gallerySchema } from "./gallery";
import { heroSchema } from "./hero";
import { sectionHeaderSchema as testimonialHeaderSchema, testimonialSchema } from "./testimonial";

export const schemaTypes = [
  heroSchema, accommodationSchema, gallerySchema, testimonialSchema, testimonialHeaderSchema
  // Add other schema types here as needed
]
