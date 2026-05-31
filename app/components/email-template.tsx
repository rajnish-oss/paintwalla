import { Html, Head, Body, Tailwind } from "@react-email/components";
type EmailTemplateProps = {
  name: string;
  phone: string;
  pincode: string;
  workArea: string;
  message: string;
};

export function EmailTemplate({ name, phone, pincode, workArea, message }: EmailTemplateProps) {
  return (
    <div >
      <h1>New Paintwala Enquiry</h1>
      <br />
      <div>
        <p><strong >Name:</strong> {name}</p> <br />
        <p><strong>Phone:</strong> {phone}</p> <br />
        <p><strong >Pincode:</strong> {pincode}</p> <br />
        <p><strong>Work area:</strong> {workArea} sq m</p> <br />
        <div>
          <p ><strong>Message:</strong></p>
          <div >
            {message}
          </div>
        </div>
      </div>
      </div>

  );
}
