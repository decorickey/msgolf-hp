'use client';

import { informationList } from "@/data/site";
import { useEffect } from "react";
import { SectionTitle } from "./section-title";

export function TopInfoSection() {
  useEffect(() => {
    const id = "twitter-wjs";
    if (document.getElementById(id)) {
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="space-y-6">
      <SectionTitle>おしらせ</SectionTitle>
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
          <div className="h-[400px] overflow-y-auto rounded-md border border-stone-100 p-2">
            <a
              className="twitter-timeline"
              data-lang="ja"
              data-width="100%"
              data-height="360"
              href="https://twitter.com/ms_golf?ref_src=twsrc%5Etfw"
            >
              Tweets by ms_golf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
