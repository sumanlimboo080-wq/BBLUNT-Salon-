import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  stylist?: string;
  date: string;
  time: string;
  message?: string;
  createdAt: string;
  status: "confirmed" | "pending";
}

const appointments: Appointment[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "BBLUNT - Salon" });
  });

  // Get appointments (for live stats / confirmation)
  app.get("/api/appointments", (req, res) => {
    res.json({ success: true, count: appointments.length, appointments });
  });

  // Book Appointment endpoint
  app.post("/api/book", (req, res) => {
    const { name, phone, email, service, stylist, date, time, message } = req.body;

    if (!name || !phone || !email || !service || !date) {
      res.status(400).json({
        success: false,
        error: "Please fill in all required fields (Name, Phone, Email, Service, Date).",
      });
      return;
    }

    const newAppointment: Appointment = {
      id: "BBLUNT-" + Math.floor(100000 + Math.random() * 900000),
      name,
      phone,
      email,
      service,
      stylist: stylist || "Any Available Senior Stylist",
      date,
      time: time || "11:00 AM",
      message: message || "",
      createdAt: new Date().toISOString(),
      status: "confirmed",
    };

    appointments.unshift(newAppointment);

    res.json({
      success: true,
      message: "Appointment booked successfully!",
      appointment: newAppointment,
    });
  });

  // AI Style & Care Advisor endpoint using Gemini API
  app.post("/api/consult", async (req, res) => {
    const { hairType, concern, desiredLook, gender } = req.body;

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        // High quality fallback recommendation
        res.json({
          success: true,
          recommendation: {
            title: `Tailored Recommendation for ${desiredLook || "Glamorous Transformation"}`,
            suggestedServices: [
              "BBLUNT Signature Hair Spa & Deep Conditioning",
              "Precision Haircut & Custom Styling",
              "Organic Keratin Smoothing Treatment"
            ],
            advice: `Based on your ${hairType || "hair texture"} and focus on ${concern || "overall hair health"}, our senior stylists recommend starting with our nourish hair spa followed by a tailored cut that framing your features.`,
            estimatedTime: "90 - 120 minutes",
            stylistTip: "Book a complimentary 10-minute color consultation before your service for optimal shade matching!"
          }
        });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the lead hair and beauty director at BBLUNT - Salon, a premium salon in Juhu, Mumbai.
Provide a concise, helpful, and ultra-professional salon consultation for a client with:
- Hair / Skin Type: ${hairType || 'Normal/Dry'}
- Primary Goal / Concern: ${concern || 'Shine & Smoothness'}
- Desired Style / Look: ${desiredLook || 'Modern & Low-maintenance'}
- Category: ${gender || 'General'}

Return ONLY a valid JSON object with keys:
"title": string summary,
"suggestedServices": array of 2-3 specific salon service names from (Haircut & Styling, Hair Color Balayage, BBLUNT Hair Spa, Keratin Treatment, Hydra Facial, Beard Grooming, Manicure & Pedicure),
"advice": string of warm expert advice (2-3 sentences),
"estimatedTime": string,
"stylistTip": string key tip.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const responseText = response.text || "";
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        res.json({ success: true, recommendation: parsed });
      } else {
        res.json({
          success: true,
          recommendation: {
            title: "BBLUNT Custom Care Plan",
            suggestedServices: ["Haircut & Styling", "BBLUNT Hair Spa"],
            advice: responseText,
            estimatedTime: "60-90 minutes",
            stylistTip: "Arrive 10 minutes early to enjoy our herbal tea and scalp analysis."
          }
        });
      }
    } catch (error: any) {
      console.error("Gemini API error:", error);
      res.json({
        success: true,
        recommendation: {
          title: "Custom Salon Treatment",
          suggestedServices: ["BBLUNT Hair Spa & Cut", "Hydrating Facial"],
          advice: "Our master stylists will assess your hair porosity and scalp health in person to formulate the perfect hair care elixir.",
          estimatedTime: "60 - 90 minutes",
          stylistTip: "Use sulfate-free shampoo to prolong salon shine."
        }
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BBLUNT - Salon Server running on http://localhost:${PORT}`);
  });
}

startServer();
