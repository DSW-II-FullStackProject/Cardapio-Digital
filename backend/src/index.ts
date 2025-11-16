import express from "express";
import cors from "cors";
import foodRoutes from "./routes/foodRoutes";
import aiRoutes from "./routes/aiRoutes";
import userRoutes from "./routes/userRoutes";

app.use("/api/ai", aiRoutes);
app.use("/api/users", userRoutes);

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => res.send("Backend rodando!"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
