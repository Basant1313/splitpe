import {defineSchema ,defineTable} from 'convex/server'
import {v} from 'convex/values'

export default defineSchema ({

    // Users Schema
    users: defineTable({
        name: v.string(),
        email: v.string(),
        tokenIdentifier: v.string(),
        imageUrl: v.optional(v.string())
    }).index("by_token", ["tokenIdentifier"])
     .index("by_email", ["email"])
    .searchIndex("search_name", { searchField: "name" })
    .searchIndex("search_email", { searchField: "email" }), // index to search faster we can add more field like we goona be search user by email .index("by_email", ["email"]). when we are creating an expense to user using name or email so for that we are having search index .searchIndex("search_name", {searchField: "name"}) .searchIndex("search_email", {searchField: "email"})


    // Expenses Schema
    expenses: defineTable({

        description: v.string(),
        amount: v.number(),
        category: v.optional(v.string()),
        date: v.number(), //timestamp
        paidByUserId: v.id("users"), // Reference to users table
        splitType: v.string(), //"equal", "percentage", "exact"
        splits: v.array(
            v.object({
                userId: v.id("users"), //Reference to users table
                amount: v.number(), //amount owned to this user
                paid: v.boolean(),
            })
        ),
        groupId: v.optional(v.id("groups")), // undefined for one-on-one expenses
        createdBy: v.id("users"), //Reference to users table

    })
    .index("by_group", ["groupId"])
    .index("by_user_and_group", ["paidByUserId", "groupId"])
    .index("by_date", ["date"]),

    // Groups Schema
    groups: defineTable({
        name: v.string(),
        description: v.optional(v.string()),
        createdBy : v.id("users"), //Reference to users table
        members: v.array(
            v.object({
                userId: v.id("users"), //Reference to users table
                role: v.string(), // "admin" or "member"
                joinedAt: v.number(),
            })
        )
    }),


    // Settlement Schema

    settlements: defineTable({
        amount: v.number(),
        note: v.optional(v.string()),
        date: v.number(), //timestamp
        paidByUserId: v.id("users"), //Reference to users table
        receivedByUserId: v.id("users"), //Reference to users table
        groupId: v.optional(v.id("groups")), //undefined for one-on-one settlements
        relatedExpenseIds: v.optional(v.array(v.id("expenses"))), //Which expenses this settlement covers
        createdBy: v.id("users"), //Reference to users table
    })
    .index("by_group", ["groupId"])
    .index("by_user_and_group", ["paidByUserId", "groupId"])
    .index("by_receiver_and_group", ["receivedByUserId", "groupId"])
    .index("by_date", ["date"]),
})