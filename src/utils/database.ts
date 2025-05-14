import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "", {
    });
  } catch (error) {
    console.error("DB接続に失敗しました:", error);
    throw new Error();
  }
}