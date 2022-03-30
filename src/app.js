import express from "express";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const viewsPath = path.join(__dirname, "./../views");

// view engine setup
app.set("views", viewsPath);
app.set("view engine", "ejs");

app.use(morgan("dev"));

export default app;
