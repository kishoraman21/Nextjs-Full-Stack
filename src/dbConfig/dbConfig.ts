import mongoose from "mongoose";

export async function connect() {
  try {
   await  mongoose.connect(process.env.mongo_url!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB is connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error", +err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
