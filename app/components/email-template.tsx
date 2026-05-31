
type EmailTemplateProps = {
  name: string;
  phone: string;
  pincode: string;
  workArea: string;
  message: string;
};

export function EmailTemplate({ name, phone, pincode, workArea, message }: EmailTemplateProps) {
  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6">
      <h1 style="font-size:24px;margin-bottom:16px">New Paintwala Enquiry</h1>
      <p style="margin:0 0 12px"><strong>Name:</strong> ${name}</p>
      <p style="margin:0 0 12px"><strong>Phone:</strong> ${phone}</p>
      <p style="margin:0 0 12px"><strong>Pincode:</strong> ${pincode}</p>
      <p style="margin:0 0 12px"><strong>Work area:</strong> ${workArea} sq m</p>
      <p style="margin:0 0 12px"><strong>Message:</strong></p>
      <div style="padding:12px 16px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc">
        ${message}
      </div>
    </div>
  `;
}
