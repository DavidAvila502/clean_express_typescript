import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index";

// App init ---
const app = express();

app.set("PORT", process.env.PORT || 3000);

// Middlewares ---
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes

app.get("/", (request, response) => {
   return response.json({ Message: "API V1.0" });
});

app.use(routes); // All routes

// Run App
app.listen(app.get("PORT"), () => {
   console.log("Server listening on port: ", app.get("PORT"));
});
