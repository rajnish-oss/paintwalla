import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";

const resendApiKey = process.env.RESEND_API_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

type EnquiryPayload = {
  name?: string;
  phone?: string;
  pincode?: string;
  workArea?: string;
  message?: string;
};

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json({ error: "RESEND_API_KEY is not configured." }, { status: 500 });
  }

  let payload: EnquiryPayload;

  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  const pincode = payload.pincode?.trim();
  const workArea = payload.workArea?.trim();
  const message = payload.message?.trim();

  if (!name || !phone || !pincode || !workArea || !message) {
    return NextResponse.json({ error: "Please fill all fields correctly." }, { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: "Paintwalla <onboarding@resend.dev>",
    to: ["Paintwala123@gmail.com"],
    subject: `New enquiry from ${name}`,
    html: EmailTemplate({
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      pincode: escapeHtml(pincode),
      workArea: escapeHtml(workArea),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    }),
  });

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}