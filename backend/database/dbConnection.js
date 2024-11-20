import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose
      .connect("add connectionstring of your database", { dbName: "Ewaste"})
      .then(() => {
        console.log("Connected to database!");
      })
      .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
      });
  };
