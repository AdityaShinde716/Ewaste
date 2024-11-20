import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose
      .connect("mongodb+srv://210160203022rishabh:Aditya@cluster0.b1nm8.mongodb.net/?retryWrites=true", { dbName: "Ewaste"})
      .then(() => {
        console.log("Connected to database!");
      })
      .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
      });
  };