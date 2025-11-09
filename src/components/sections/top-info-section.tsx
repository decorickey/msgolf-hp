import { informationList } from "@/data/site";
import { SectionTitle } from "./section-title";
import { TwitterTimeline } from "./twitter-timeline";

export function TopInfoSection() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="News">おしらせ</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-stone-200 bg-white p-4">
          <div className="space-y-4 rounded-md border border-stone-100 p-4">
            {informationList.map((info) => (
              <article key={info.date} className="space-y-2">
                <p className="text-sm font-semibold text-stone-500">
                  {new Date(info.date).toLocaleDateString("ja-JP")}
                </p>
                <ul className="space-y-1 text-stone-700">
                  {info.contents.map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-4">
          <TwitterTimeline />
        </div>
      </div>
    </section>
  );
}
