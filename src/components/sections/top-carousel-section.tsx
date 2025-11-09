import { heroSlides } from "@/data/site";
import { ImageCarousel } from "../ui/image-carousel";

export function TopCarouselSection() {
  return (
    <section className="w-full overflow-hidden rounded-[28px]">
      <ImageCarousel images={heroSlides} aspectRatio={16 / 7} />
    </section>
  );
}
