"use client";

import { useState } from "react";

type EnquiryProps = {
  embedded?: boolean;
};

export default function Enquiry({ embedded = false }: EnquiryProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [workArea, setWorkArea] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [pincodeError, setPincodeError] = useState("");

  const isValidPincode = (value: string) => /^(221|232)\d{3}$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !pincode.trim() || !workArea.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill all fields correctly.");
      setPincodeError("");
      return;
    }

    if (!isValidPincode(pincode.trim())) {
      setStatus("error");
      setErrorMessage("");
      setPincodeError("Sorry! currently we only serve in varanasi.");
      return;
    }

    try {
      setStatus("sending");
      setErrorMessage("");
      setPincodeError("");
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          pincode: pincode.trim(),
          workArea: workArea.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        console.log(response)
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setErrorMessage("");
      setPincodeError("");
      setName("");
      setPhone("");
      setPincode("");
      setWorkArea("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      setPincodeError("");
    }
  };

  const content = (
    <div className={embedded ? "" : "w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_66%),radial-gradient(circle_at_bottom_right,rgba(216,182,108,0.831),transparent_46%)] px-4 py-20 sm:px-6 lg:px-8"}>
      <div className={embedded ? "rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-7" : "mx-auto max-w-3xl rounded-4xl border border-white/60 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-7"}>
        <h2 className="text-2xl font-semibold text-slate-950">Enquiry</h2>
        <p className="mt-2 text-sm text-slate-600">Send us a quick message and we'll get back to you soon.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
            className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d8b56c] transition-colors"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Phone number</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-label="Phone number"
            className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d8b56c] transition-colors"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Pincode</span>
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value.replace(/\D/g, ""));
              setPincodeError("");
            }}
            aria-label="Pincode"
            className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d8b56c] transition-colors"
            required
          />
          {pincodeError && <p className="mt-1 text-sm text-rose-600">{pincodeError}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Work area in sq m</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={workArea}
            onChange={(e) => setWorkArea(e.target.value)}
            aria-label="Work area in sq m"
            className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d8b56c] transition-colors"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message"
            rows={5}
            className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d8b56c] transition-colors"
            required
          />
        </label>

        <div className="mt-2 flex items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center rounded-2xl bg-[#d8b56c] px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-[#caa85a] disabled:opacity-60 transition-colors"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Enquiry"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-600">Message sent — we’ll be in touch.</p>
          )}

          {status === "error" && errorMessage && <p className="text-sm text-rose-600">{errorMessage}</p>}
        </div>
        </form>
      </div>
    </div>
  );

  return embedded ? content : <section className="w-full">{content}</section>;
}
