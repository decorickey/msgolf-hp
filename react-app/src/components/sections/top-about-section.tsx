import { SectionTitle } from "./section-title";

const paragraphs = [
  "埼玉県草加市にあるゴルフクラブ工房です。",
  "スコア100を切れないとお悩みの方、100切りのお手伝いならお任せください！",
  "これからゴルフを始める方・今のクラブに不安を感じている方には、チューニングやレクチャーも可能です。",
  "ぜひお気軽にご相談ください。",
];

export function TopAboutSection() {
  return (
    <section className="space-y-6">
      <SectionTitle>MSゴルフについて</SectionTitle>
      <div className="space-y-4 text-lg leading-relaxed text-stone-700">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}
