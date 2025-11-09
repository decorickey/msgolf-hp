// MSゴルフのトップページを Nuxt 版と同じセクション構成で Next.js / React に再構築した。
import { TopCarouselSection } from "@/components/sections/top-carousel-section";
import { TopAboutSection } from "@/components/sections/top-about-section";
import { TopInfoSection } from "@/components/sections/top-info-section";
import { WorkshopMenuSection } from "@/components/sections/workshop-menu-section";
import { MakersAndClubsSection } from "@/components/sections/makers-and-clubs-section";
import { BusinessInfoSection } from "@/components/sections/business-info-section";
import { AccessInfoSection } from "@/components/sections/access-info-section";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-gradient-to-b from-stone-100 via-white to-stone-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center opacity-60">
        <div className="h-[420px] w-[640px] bg-emerald-100/60 blur-[120px]" />
      </div>
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-24 pt-10 md:gap-20 md:px-10">
        <div className="glass-panel p-2">
          <TopCarouselSection />
        </div>

        <section id="about" className="glass-panel space-y-16 p-6 md:p-12">
          <TopAboutSection />
          <TopInfoSection />
        </section>

        <section id="menu" className="glass-panel space-y-16 p-6 md:p-12">
          <WorkshopMenuSection />
          <MakersAndClubsSection />
        </section>

        <section id="info" className="glass-panel space-y-12 p-6 md:p-12">
          <BusinessInfoSection />
        </section>

        <section id="access" className="glass-panel space-y-12 p-6 md:p-12">
          <AccessInfoSection />
        </section>
      </main>
    </div>
  );
}
