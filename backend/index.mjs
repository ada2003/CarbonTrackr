import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import carbonRoutes from "./routes/carbonRoutes.mjs"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/carbon", carbonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
