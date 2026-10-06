import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { source, data } = body;

    // Format the message beautifully
    let message = `🔔 *New Form Submission*\n*Source:* ${source}\n\n`;
    for (const [key, value] of Object.entries(data)) {
      message += `*${key}:* ${value}\n`;
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.warn("Telegram credentials not found in environment variables.");
      // We return success anyway so we don't break the client-side UI if they forgot to add the env vars yet.
      return NextResponse.json({ success: true, warning: "Credentials missing" });
    }

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Telegram API Error:", errorText);
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in Telegram API route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
