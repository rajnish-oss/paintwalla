import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";

const resendApiKey = process.env.RESEND_API_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;
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
    from: "Paintwalla <no-reply@paintwalla.store>",
    to: ["Paintwala123@gmail.com"],
    subject: `New enquiry from ${name}`,
    react : EmailTemplate({
      name: name,
      phone: phone,
      pincode: pincode,
      workArea: workArea,
      message: message,
    }),
  });

  if (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}