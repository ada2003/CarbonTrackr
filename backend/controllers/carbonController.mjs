import { getAIRecommendations } from "../services/aiService.mjs";
export const calculateCarbon = async (req, res) => {
  const { travelDistance, transportMode } = req.body;
  const emissionFactor = { car: 0.12, bus: 0.06, train: 0.04 };
  const carbonFootprint = (travelDistance || 0) * (emissionFactor[transportMode] || 0.1);
  const recommendations = await getAIRecommendations(req.body);
  res.json({ carbonFootprint, recommendations });
};