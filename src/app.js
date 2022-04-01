import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const viewsPath = path.join(__dirname, "./views");
const publicPath = path.join(__dirname, "../public");

// view engine setup
app.set("views", viewsPath);
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.use("/", indexRouter);

console.log(publicPath);

export default app;
