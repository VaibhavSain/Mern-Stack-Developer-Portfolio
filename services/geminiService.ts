
import { GoogleGenAI, Chat } from "@google/genai";
import { BIO_CONTEXT } from "../constants";

export class PortfolioAI {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are Vaibhav's AI Twin, a personal assistant for his portfolio website.
        Your goal is to answer recruiter or visitor questions about Vaibhav Sain based on this context: ${BIO_CONTEXT}.
        Be professional, concise, and helpful. If you don't know an answer, politely suggest they contact Vaibhav directly via the contact form.
        Keep responses under 3 sentences unless asked for detailed explanations.`,
        temperature: 0.7,
      }
    });
  }

  async sendMessage(message: string) {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("AI Error:", error);
      return "I'm having a bit of a brain freeze right now. Please try again or reach out to Vaibhav directly!";
    }
  }

  async *sendMessageStream(message: string) {
    try {
      const result = await this.chat.sendMessageStream({ message });
      for await (const chunk of result) {
        yield chunk.text;
      }
    } catch (error) {
      console.error("AI Stream Error:", error);
      yield "Sorry, I encountered an error while processing your request.";
    }
  }
}
