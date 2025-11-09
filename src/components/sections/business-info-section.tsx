import { businessInfo } from "@/data/site";
import { SectionTitle } from "./section-title";

export function BusinessInfoSection() {
  return (
    <section className="space-y-6">
      <SectionTitle>営業案内</SectionTitle>
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <div className="rounded-lg border border-stone-200 bg-white p-4">
          <h3 className="text-lg font-semibold">営業時間</h3>
          <ul className="mt-2 space-y-2">
            {businessInfo.openingHours.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-4">
          <h3 className="text-lg font-semibold">電話</h3>
          <ul className="mt-2 space-y-2">
            {businessInfo.phones.map((phone) => (
              <li key={phone.number}>
                {phone.label}: {phone.number}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-stone-500">{businessInfo.note}</p>
        </div>
      </div>
    </section>
  );
}
