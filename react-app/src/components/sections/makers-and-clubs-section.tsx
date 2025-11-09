import Image from "next/image";
import { makers } from "@/data/site";
import { SectionTitle } from "./section-title";
import { ImageCarousel } from "../ui/image-carousel";

export function MakersAndClubsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle>取り扱いメーカー</SectionTitle>
      <p className="text-center text-stone-700">
        様々なメーカーのゴルフクラブを取り扱っております。
      </p>
      <div className="space-y-4">
        {makers.map((brand) => (
          <details
            key={brand.name}
            className="rounded-lg border border-stone-200 bg-white p-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <div className="relative h-16 w-40">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} ロゴ`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
              <span className="text-sm text-stone-500">詳細を見る</span>
            </summary>

            {"clubs" in brand && Array.isArray(brand.clubs) && (
              <div className="mt-6 space-y-6">
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
