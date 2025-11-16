import { GoogleGenerativeAI } from "@google/generative-ai";

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateMenuAI = async (foods: any[]) => {
  const prompt = `
Gere um cardápio baseado nos seguintes itens:
${JSON.stringify(foods, null, 2)}

Retorne:
- categorias
- descrições
- combos
- recomendações personalizadas
`;

  const result = await model.generateContent(prompt);

  const text =
    (result as any)?.response?.text ??
    JSON.stringify(result);

  return { text, prompt };
};
