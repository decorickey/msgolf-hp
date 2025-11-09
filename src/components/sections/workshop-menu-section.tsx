import { workshopSlides } from "@/data/site";
import { SectionTitle } from "./section-title";
import { ImageCarousel } from "../ui/image-carousel";

export function WorkshopMenuSection() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Services">工房メニュー</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Custom Club
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900">
              オーダーメイドクラブ製造・販売
            </h3>
          </div>
          <p className="mt-4 flex-1 leading-relaxed text-stone-700 md:text-base">
            長年培ってきたクラブ制作・フィッティングの経験を活かし、
            悩めるゴルファーに最適な一本をワンストップでご提供します。
            形状や重量、バランスまで細かく調整し、ご要望に合わせたセットアップが可能です。
          </p>
          <div className="mt-6 overflow-hidden rounded-xl bg-stone-50 p-2">
            <ImageCarousel images={workshopSlides} aspectRatio={16 / 9} />
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Repair & Tune
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900">
              クラブ修理・チューニング
            </h3>
          </div>

          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-700 md:text-base">
            {[
              "グリップ交換・シャフト入れ替え（スパイン調整）",
              "シャフトカット／延長、ウッド・パター塗り替え",
              "アイアン／パターのロフト・ライ角調整",
              "キャディバッグ修理 など各種メンテナンス",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span aria-hidden className="mt-1 text-stone-400">★</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-xl bg-stone-50 p-4 text-sm text-stone-600">
            <p>※その他作業も承ります。お気軽にご相談ください。</p>
            <p className="mt-2">※測定機つき試打場をご用意しています。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
