import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, countryCode, phone, arrivalDetails, blessingMessage } = body;

    if (!name?.trim() || !countryCode?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { message: "Email configuration is missing." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.replace(/\s/g, ""),
      },
    });

    await transporter.sendMail({
      from: `"Wedding RSVP" <${process.env.EMAIL_USER}>`,
      to: "akshayvyakhaya@gmail.com",
      replyTo: process.env.EMAIL_USER,
      subject: `New Wedding RSVP — ${name.trim()}`,
      text: `
New Wedding RSVP

Name: ${name.trim()}
Phone: ${countryCode.trim()} ${phone.trim()}

Arrival Details:
${arrivalDetails?.trim() || "Not provided"}

Blessing Message:
${blessingMessage?.trim() || "Not provided"}
      `,
    });

    return NextResponse.json(
      { message: "RSVP submitted successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("RSVP email error:", error);

    return NextResponse.json(
      { message: "Unable to submit RSVP. Please try again." },
      { status: 500 },
    );
  }
}
