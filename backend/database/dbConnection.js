import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose
      .connect("add connection string of your database", { dbName: "your database name"})
      .then(() => {
        console.log("Connected to database!");
      })
      .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
      });
  };
