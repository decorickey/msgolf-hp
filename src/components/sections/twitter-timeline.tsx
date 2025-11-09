'use client';

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export function TwitterTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[400px] overflow-y-auto rounded-md border border-stone-100 p-2"
    >
      {isMounted ? (
        <>
          <a
            className="twitter-timeline"
            href="https://twitter.com/ms_golf?ref_src=twsrc%5Etfw"
            data-height="360"
            data-width="100%"
          >
            Tweets by ms_golf
          </a>
          <Script
            id="twitter-wjs"
            src="https://platform.twitter.com/widgets.js"
            strategy="lazyOnload"
            charSet="utf-8"
          />
        </>
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-stone-500">
          X（旧Twitter）の投稿を読み込んでいます…
        </div>
      )}
    </div>
  );
}
