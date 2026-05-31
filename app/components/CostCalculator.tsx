"use client";

import { useMemo, useState } from "react";

export enum PaintTier {
  Economy = "Economy",
  Premium = "Premium",
  Luxury = "Luxury",
}

export enum ProjectType {
  FreshPaint = "FreshPaint",
  Repaint = "Repaint",
}

interface PricingRates {
  material: number;
  labour: number;
  primer: number;
  putty: number;
}

const TIER_PRICING: Record<PaintTier, { material: number; labour: number }> = {
  [PaintTier.Economy]: { material: 5, labour: 8 },
  [PaintTier.Premium]: { material: 7, labour: 10 },
  [PaintTier.Luxury]: { material: 15, labour: 12 },
};

const TIER_LABOUR_FRESH: Record<PaintTier, number> = {
  [PaintTier.Economy]: 6,
  [PaintTier.Premium]: 8,
  [PaintTier.Luxury]: 10,
};

const PREP_PRICING = {
  primer: 2.5,
  puttyFull: 6,
  puttyTouchup: 1,
};

const GST_RATE = 0.18;

export interface CalculatorInput {
  carpetArea: number;
  tier: PaintTier;
  projectType: ProjectType;
}

export interface CalculatorResult {
  paintableAreaSqFt: number;
  materialCost: number;
  labourCost: number;
  primerCost: number;
  puttyCost: number;
  subtotal: number;
  gstAmount: number;
  grandTotal: number;
}

export function calculatePaintingCost(input: CalculatorInput): CalculatorResult {
  const { carpetArea, tier, projectType } = input;

  const paintableAreaSqFt = carpetArea * 3.5;
  const baseRates = TIER_PRICING[tier];
  const puttyRatePerSqFt =
    projectType === ProjectType.FreshPaint
      ? PREP_PRICING.puttyFull
      : PREP_PRICING.puttyTouchup;
  const primerRatePerSqFt = PREP_PRICING.primer;

  const materialCost = paintableAreaSqFt * baseRates.material;
  const labourRate = projectType === ProjectType.FreshPaint ? TIER_LABOUR_FRESH[tier] : baseRates.labour;
  const labourCost = paintableAreaSqFt * labourRate;
  const primerCost = paintableAreaSqFt * primerRatePerSqFt;
  const puttyCost = paintableAreaSqFt * puttyRatePerSqFt;
  const subtotal = materialCost + labourCost + primerCost + puttyCost;
  const gstAmount = subtotal * GST_RATE;
  const grandTotal = subtotal + gstAmount;

  return {
    paintableAreaSqFt,
    materialCost,
    labourCost,
    primerCost,
    puttyCost,
    subtotal,
    gstAmount,
    grandTotal,
  };
}

const money = (value: number) => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);

function CostCalculator() {
  const [carpetArea, setCarpetArea] = useState(1200);
  const [tier, setTier] = useState(PaintTier.Premium);
  const [projectType, setProjectType] = useState(ProjectType.FreshPaint);

  const result = useMemo(
    () =>
      calculatePaintingCost({
        carpetArea,
        tier,
        projectType,
      }),
    [carpetArea, tier, projectType]
  );

  const tierOptions = [PaintTier.Economy, PaintTier.Premium, PaintTier.Luxury];
  const projectOptions = [ProjectType.FreshPaint, ProjectType.Repaint];

  return (
    <section id="calculator" className="relative isolate overflow-hidden bg-transparent px-4 py-16 text-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(216,181,108,0.18),transparent_30%)]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.42em] text-slate-500">Cost Calculator</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Estimate Your Painting Budget
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Choose the carpet area, project type, and finish tier to see a quick estimate with material, labour, primer, putty, GST, and final total.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="rounded-4xl border border-white/60 bg-white/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">Carpet Area</span>
                <div className="mt-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <input
                    type="number"
                    min={1}
                    value={carpetArea}
                    onChange={(event) => setCarpetArea(Math.max(1, Number(event.target.value) || 1))}
                    className="w-full bg-transparent text-2xl font-semibold text-slate-950 outline-none"
                    aria-label="Carpet area in square feet"
                  />
                </div>
                <p className="mt-2 text-sm text-slate-500">Enter area in square feet.</p>
              </label>

              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">Paint Tier</span>
                <div className="mt-3 grid gap-3">
                  {tierOptions.map((option) => {
                    const selected = option === tier;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setTier(option)}
                        className={`rounded-2xl border px-4 py-3 text-left transition ${selected ? "border-[#d8b56c] bg-[#d8b56c]/10 text-slate-950" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}
                      >
                        <span className="block text-base font-semibold">{option}</span>
                        <span className="block text-sm text-slate-500">Per square foot pricing</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">Project Type</span>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {projectOptions.map((option) => {
                  const selected = option === projectType;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setProjectType(option)}
                      className={`rounded-2xl border px-4 py-4 text-left transition ${selected ? "border-[#d8b56c] bg-[#d8b56c]/10 text-slate-950" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}
                    >
                      <span className="block text-base font-semibold">
                        {option === ProjectType.FreshPaint ? "Fresh Paint" : "Repaint"}
                      </span>
                      <span className="block text-sm text-slate-500">
                        {option === ProjectType.FreshPaint ? "Full preparation and coating" : "Touch-up focused refresh"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">Formula</p>
              <div className="mt-3 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">Paintable area = carpet area x 3.5</div>
                <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">GST rate = 18%</div>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.72))] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">Estimate Summary</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{money(result.grandTotal)}</h3>
                <p className="mt-2 text-sm text-slate-500">Estimated grand total in INR</p>
              </div>
              <span className="rounded-full border border-[#d8b56c]/30 bg-[#d8b56c]/10 px-4 py-2 text-sm font-semibold text-slate-700">
                {tier}
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Paintable Area</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">{money(result.paintableAreaSqFt)} sq ft</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Subtotal</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">{money(result.subtotal)}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["Material Cost", result.materialCost],
                ["Labour Cost", result.labourCost],
                ["Primer Cost", result.primerCost],
                ["Putty Cost", result.puttyCost],
                ["GST", result.gstAmount],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                  <span>{label}</span>
                  <span className="font-semibold text-slate-950">{money(Number(value))}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-[#d8b56c]/30 bg-[#d8b56c]/10 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Project Type</p>
              <p className="mt-2 text-base font-semibold text-slate-950">
                {projectType === ProjectType.FreshPaint ? "Fresh painting with full prep" : "Repainting with touch-up prep"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CostCalculator;