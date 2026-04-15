import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// Point this to your custom generated folder
import { PrismaClient } from "../../generated/prisma"; 

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),
     emailAndPassword: { 
    enabled: true, 
  },
});