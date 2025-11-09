import { workshopSlides } from "@/data/site";
import { SectionTitle } from "./section-title";
import { ImageCarousel } from "../ui/image-carousel";

export function WorkshopMenuSection() {
  return (
    <section className="space-y-6">
      <SectionTitle>工房メニュー</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-stone-100 p-6">
          <h3 className="text-center text-xl font-semibold">
            オーダーメイドクラブ
            <br />
            製造・販売
          </h3>
          <p className="mt-4 leading-relaxed text-stone-700">
            長年培ってきたクラブ制作・フィッティングの経験を活かし、
            悩めるゴルファーにぴったりのクラブをお作りします。
          </p>
          <div className="mt-6">
            <ImageCarousel images={workshopSlides} aspectRatio={16 / 9} />
          </div>
        </div>

        <div className="rounded-lg bg-stone-100 p-6">
          <h3 className="text-center text-xl font-semibold">
            クラブ修理
            <br />
            チューニング
          </h3>

          <ul className="mt-4 space-y-2 leading-relaxed text-stone-700">
            {[
              "・グリップ交換",
              "・シャフト入れ替え(スパイン調整)",
              "・シャフトカット(伸ばし)",
              "・ウッド・パター塗替え",
              "・アイアン／パター ロフト・ライ調整",
              "・キャディバッグ修理 など",
              "※その他作業も承ります。お気軽にご相談ください。",
              "※測定機つき試打場あります。",
            ].map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
