import Image from "next/image";
import { makers } from "@/data/site";
import { SectionTitle } from "./section-title";
import { ImageCarousel } from "../ui/image-carousel";

export function MakersAndClubsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Brands">取り扱いメーカー</SectionTitle>
      <p className="text-center text-stone-600">
        国内外のクラフトメーカーを幅広くご案内しております。ロゴをタップすると取り扱いクラブ画像が表示されます。
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {makers.map((brand) => (
          <details
            key={brand.name}
            className="group rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-36">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} ロゴ`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 group-open:text-stone-600">
                { "clubs" in brand ? "View" : "" }
              </span>
            </summary>

            {"clubs" in brand && Array.isArray(brand.clubs) && (
              <div className="mt-4 space-y-4">
                {brand.clubs.map((club, index) => (
                  <ImageCarousel
                    key={`${brand.name}-${index}`}
                    images={club.images.map(
                      (image: string, imageIndex: number) => ({
                        src: image,
                        alt: `${brand.name} クラブ ${imageIndex + 1}`,
                      }),
                    )}
                    aspectRatio={1}
                    intervalMs={3500}
                  />
                ))}
              </div>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
