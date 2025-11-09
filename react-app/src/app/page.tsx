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
    <div className="bg-stone-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-4 pb-16 pt-8 md:px-8">
        <TopCarouselSection />
        <section
          id="about"
          className="space-y-16 rounded-2xl bg-white p-6 shadow-sm md:p-10"
        >
          <TopAboutSection />
          <TopInfoSection />
        </section>

        <section
          id="menu"
          className="space-y-16 rounded-2xl bg-white p-6 shadow-sm md:p-10"
        >
          <WorkshopMenuSection />
          <MakersAndClubsSection />
        </section>

        <section
          id="info"
          className="space-y-16 rounded-2xl bg-white p-6 shadow-sm md:p-10"
        >
          <BusinessInfoSection />
        </section>

        <section
          id="access"
          className="space-y-16 rounded-2xl bg-white p-6 shadow-sm md:p-10"
        >
          <AccessInfoSection />
        </section>
      </main>
    </div>
  );
}
