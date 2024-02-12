"use client";
import getResponse from "../api/chat/getResponse";
import { useState, useEffect } from "react";

const Chat = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getResponse("Hello, I am a human. What are you?");
        setContent(response); // Assuming the response contains the content you want to set
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., setContent("Error fetching data");
      }
    };

    fetchData();
  }, []);

  console.log(content);

  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

export default Chat;
