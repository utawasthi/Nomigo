import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args : {
    name : v.string(),
    email : v.string(),
    imageUrl : v.string(),
  },
  handler : async (ctx , args) => {
    // user already exists 
    const user = await ctx.db.query('users').
    filter((q) => q.eq(q.field('email') , args.email))
    .collect();

    if(!(user?.length)){
     const userData = {
      name : args.name,
      email : args.email,
      imageUrl : args.imageUrl,
     }

     const res = await ctx.db.insert('users' , userData);
     return userData;
    }
    return user[0];
  }
})