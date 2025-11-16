import { prisma } from "../prismaClient";
import { generateMenuAI } from "../services/aiService";

export const generateMenu = async (req, res) => {
  try {
    const foods = await prisma.food.findMany();

    const { text, prompt } = await generateMenuAI(foods);

    await prisma.aiLog.create({
      data: { prompt, response: text }
    });

    res.json({ ok: true, result: text });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Erro ao gerar cardápio" });
  }
};
