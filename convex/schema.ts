import {defineSchema , defineTable} from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  users : defineTable({
    name : v.string(),
    imageUrl : v.string(),
    email : v.string(),
    subscription : v.optional(v.string()),
  }),

  trip_details_table : defineTable({
    tripDetail : v.any(),
    uid : v.id('users'),
  })
});