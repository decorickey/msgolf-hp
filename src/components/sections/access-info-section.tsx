import Image from "next/image";
import { accessInfo } from "@/data/site";
import { SectionTitle } from "./section-title";

export function AccessInfoSection() {
  return (
    <section className="space-y-6">
      <SectionTitle>アクセス</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 text-stone-700">
          <p className="text-lg font-semibold">{accessInfo.name}</p>
          <p>{accessInfo.postalCode}</p>
          <p>{accessInfo.address}</p>
          {accessInfo.access.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
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

      <div
        className="relative w-full overflow-hidden rounded-lg"
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
  );
}
