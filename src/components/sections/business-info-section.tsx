import { businessInfo } from "@/data/site";
import { SectionTitle } from "./section-title";

export function BusinessInfoSection() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Information">営業案内</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <span aria-hidden className="text-2xl">🕒</span>
            営業時間
          </h3>
          <ul className="mt-4 space-y-2 text-stone-700">
            {businessInfo.openingHours.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <span aria-hidden className="text-2xl">📞</span>
            電話
          </h3>
          <ul className="mt-4 space-y-3 text-stone-700">
            {businessInfo.phones.map((phone) => (
              <li key={phone.number} className="flex flex-col text-base md:flex-row md:items-center md:gap-3">
                <span className="text-sm font-semibold text-stone-500">
                  {phone.label}
                </span>
                <span className="text-lg font-medium tracking-wide">
                  {phone.number}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg bg-stone-100 px-4 py-3 text-sm text-stone-600">
            {businessInfo.note}
          </div>
        </div>
      </div>
    </section>
  );
}
