import type { ComponentProps } from "react";

function Card({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={`rounded-3xl border border-white/60 bg-white/75 text-slate-950 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}

function CardContent({ className = "", ...props }: ComponentProps<"div">) {
  return <div data-slot="card-content" className={className} {...props} />;
}

export { Card, CardContent };