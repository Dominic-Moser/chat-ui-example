import axios from 'axios';

export default async function getResponse(prompt, setContent) {
  const API_KEY = process.env.DEEPINFRA_KEY;

  try {
    const response = await axios.post('https://api.deepinfra.com/v1/openai/chat/completions', {
      model: "lizpreciatior/lzlv_70b_fp16_hf",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 20,
      stream: true,
    }, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${API_KEY}`,
      },
      responseType: 'stream', // Set the response type to stream
    });

    const stream = response.data; // Get the response stream

    stream.on("data", (chunk) => {
      const toString = chunk.toString().replace("data: ", "");
      if (toString.includes("[DONE]")) return;
      const toJSON = JSON.parse(toString);
      const newContent = toJSON.choices[0].delta.content;
      console.log(newContent === undefined ? "" : newContent);
      setContent(newContent);
    });

  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error gracefully, e.g., setContent("Error fetching data");
  }
}
