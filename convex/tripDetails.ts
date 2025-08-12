import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const CreateTripDetail = mutation({
  args : {
    tripId : v.string(),
    uid : v.id('users'),
    tripDetail : v.any(),
  },
  handler : async (ctx , args) => {
    const result = await ctx.db.insert('trip_details_table' , {
      tripDetail : args.tripDetail,
      tripId : args.tripId,
      uid : args.uid,
    })
  }
});

export const GetUserTrips = query({
  args : {
    uid : v.id('users'),
  },
  handler : async (ctx , args) => {
   const result = await ctx.db.query('trip_details_table')
   .filter(q => q.eq(q.field('uid') , args.uid))
   .order('desc')
   .collect();
   
   return result;
  }
});

export const GetTripById = query({
  args : {
    uid : v.id('users'),
    tripId : v.string(),
  },
  handler : async (ctx , args) => {
   const result = await ctx.db.query('trip_details_table')
   .filter(q => q.and(
    q.eq(q.field('uid') , args.uid) , 
    q.eq(q.field('tripId') , args.tripId)
   ))
   .collect();
   
   return result[0];
  }
});