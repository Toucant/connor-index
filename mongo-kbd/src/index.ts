import express from "express";
import { connectToDatabase } from "./services/database.service";
import { taskRouter } from "./routes/tasks.router";
import cors from "cors";
const app = express();
const port = 8000;
const allowedOrigins = ['http://localhost:3000'];
const networkOptions: cors.CorsOptions = {
  origin: allowedOrigins
}
connectToDatabase()
  .then(() => {
    app.use(cors(networkOptions));
    app.use("/tasks", taskRouter);

    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  })
  .catch((err: Error) => {
    console.error("Oops", err);
    process.exit();
  });
