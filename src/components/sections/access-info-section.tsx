import Image from "next/image";
import { accessInfo } from "@/data/site";
import { SectionTitle } from "./section-title";

export function AccessInfoSection() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Access">アクセス</SectionTitle>
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
        <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm text-stone-700">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Access
          </p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">
            {accessInfo.name}
          </p>
          <div className="mt-4 space-y-1 text-lg">
            <p>{accessInfo.postalCode}</p>
            <p>{accessInfo.address}</p>
          </div>
          <ul className="mt-6 space-y-3 rounded-xl bg-stone-50 p-4 text-sm leading-relaxed md:text-base md:flex-1">
            {accessInfo.access.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span aria-hidden className="mt-0.5 text-stone-400">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-sm md:h-full">
          <Image
            src="/exterior.jpg"
            alt="店舗外観"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 512px"
            priority
          />
        </div>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        <div
          className="relative w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            title="MSゴルフファクトリー地図"
            src={accessInfo.mapSrc}
            loading="lazy"
            className="h-full w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </section>
  );
}
