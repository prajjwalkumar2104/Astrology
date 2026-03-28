import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    // 1. Google Provider (Separate)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 2. Credentials Provider (Separate)
    CredentialsProvider({
      name: "credentials",
      credentials: {}, 
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await dbConnect();
          const user = await User.findOne({ email }).select("+password");
          if (!user) throw new Error("No user found with this email.");

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) throw new Error("Incorrect password.");

          return user;
        } catch (error) {
          console.log("Auth Error: ", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
  async signIn({ user, account }) {
    if (account.provider === "google") {
      try {
        await dbConnect();
        
        // Check if user already exists
        const userExists = await User.findOne({ email: user.email });

        if (!userExists) {
          // If not, create them in the stars (MongoDB)
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            // We don't pass a password here
          });
          console.log("New Google user created in MongoDB");
        }
        return true; 
      } catch (error) {
        // CHECK YOUR TERMINAL FOR THIS LOG:
        console.error("CRITICAL DATABASE ERROR:", error);
        return false; // Rejection happens here
      }
    }
    return true;
  },
  },
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };