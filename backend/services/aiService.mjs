import axios from "axios";

export const getAIRecommendations = async (data) => {
  try {
    console.log("Sending request to OpenAI with data:", data);
    
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: `Suggest ways to reduce carbon footprint based on: ${JSON.stringify(data)}` }
        ],
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );

    console.log("OpenAI response:", response.data);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API error:", error.response?.data || error.message);
    return "Could not fetch recommendations.";
  }
};
