import express from "express";
import { PORT } from "./config.js";
import IndexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

// Routes
app.use(IndexRoutes);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
