import React from "react";
import Image from "next/image";

export default function WhatsAppButton() {
  const phone = "9118033566"; // e.g. 919999999999 (country code + number, no plus sign)
  const message = "hi";
  const href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Paintwalla on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <Image 
        src="/whatsapp.svg" 
        alt="Contact Paintwalla on WhatsApp" 
        width={40} 
        height={40} 
        className="rounded-full" 
      />
    </a>
  );
}
