import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Stories: defineTable({
    description: v.string(),
    id: v.float64(),
    imageUrl: v.string(),
    imageUrls: v.array(v.string()),
    title: v.string(),
    url: v.string(),
    videoUrl: v.string(),
  }),
  Updates: defineTable({
    date: v.string(),
    description: v.string(),
    image: v.string(),
    link: v.string(),
    title: v.string(),
  }),
});
