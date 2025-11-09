// MSゴルフのReact版で共有する定数群。画像パスは /public 以下を前提とする。
export const heroSlides = [
  { src: "/carousel/P1017218-2.jpg", alt: "工房の作業風景1" },
  { src: "/carousel/P1017120-2.jpg", alt: "工房の作業風景2" },
  { src: "/carousel/P1017133-2.jpg", alt: "工房の作業風景3" },
  { src: "/carousel/P1017155-2.jpg", alt: "工房の作業風景4" },
  { src: "/carousel/P1017201-2.jpg", alt: "工房の作業風景5" },
] as const;

export const informationList = [
  {
    date: "2023-06-01",
    contents: ["ホームページが新しくなりました！"],
  },
] as const;

export const workshopSlides = [
  { src: "/order.jpg", alt: "クラブ製造の様子" },
  { src: "/hitting.jpg", alt: "試打スペース" },
] as const;

export const makers = [
  { name: "afd", logo: "/brands/afd/logo.png" },
  {
    name: "agrind",
    logo: "/brands/agrind/logo.png",
    clubs: [
      {
        images: [
          "/brands/agrind/club-1-1.jpg",
          "/brands/agrind/club-1-2.jpg",
          "/brands/agrind/club-1-3.jpg",
        ],
      },
      {
        images: [
          "/brands/agrind/club-2-1.jpg",
          "/brands/agrind/club-2-2.jpg",
          "/brands/agrind/club-2-3.jpg",
        ],
      },
    ],
  },
  { name: "baldo", logo: "/brands/baldo/logo.png" },
  { name: "buddy", logo: "/brands/buddy/logo.png" },
  {
    name: "epon",
    logo: "/brands/epon/logo.svg",
    clubs: [
      { images: ["/brands/epon/club-1-1.jpeg"] },
      {
        images: [
          "/brands/epon/club-2-1.jpeg",
          "/brands/epon/club-2-2.jpeg",
          "/brands/epon/club-2-3.jpeg",
        ],
      },
      {
        images: [
          "/brands/epon/club-3-1.JPG",
          "/brands/epon/club-3-2.JPG",
          "/brands/epon/club-3-3.JPG",
        ],
      },
      { images: ["/brands/epon/club-4-1.jpeg"] },
    ],
  },
  { name: "forebes", logo: "/brands/forebes/logo.png" },
  { name: "gorilla", logo: "/brands/gorilla/logo.png" },
  { name: "jbeam", logo: "/brands/jbeam/logo.png" },
  {
    name: "jucie",
    logo: "/brands/jucie/logo.png",
    clubs: [
      {
        images: [
          "/brands/jucie/club1-1.JPG",
          "/brands/jucie/club1-2.JPG",
          "/brands/jucie/club1-3.JPG",
        ],
      },
    ],
  },
  { name: "kyoei", logo: "/brands/kyoei/logo.png" },
  {
    name: "masda",
    logo: "/brands/masda/logo.png",
    clubs: [
      {
        images: [
          "/brands/masda/club-1-1.jpg",
          "/brands/masda/club-1-2.jpg",
        ],
      },
    ],
  },
  { name: "maxsoul", logo: "/brands/maxsoul/logo.png" },
  {
    name: "minervagolf",
    logo: "/brands/minervagolf/logo.jpg",
    clubs: [
      {
        images: [
          "/brands/minervagolf/club-1-1.jpeg",
          "/brands/minervagolf/club-1-2.jpeg",
        ],
      },
    ],
  },
  { name: "miura", logo: "/brands/miura/logo.png" },
  { name: "mystery", logo: "/brands/mystery/logo.png" },
  { name: "razzle", logo: "/brands/razzle/logo.png" },
  {
    name: "romaro",
    logo: "/brands/romaro/logo.png",
    clubs: [
      { images: ["/brands/romaro/club-1-1.jpeg"] },
      { images: ["/brands/romaro/club-2-1.jpeg"] },
    ],
  },
] as const;

export const accessInfo = {
  name: "MSゴルフファクトリー",
  postalCode: "〒340-0044",
  address: "埼玉県草加市花栗2-11-24",
  access: [
    "草加駅からバスで約10分",
    "駐車場有：お車でのご来店も歓迎です",
  ],
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25876.306406317817!2d139.7509361743164!3d35.835802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601891493b04a949%3A0xf1f430560d2bb3c3!2zTVPjgrTjg6vjg5Xjg5XjgqHjgq_jg4jjg6rjg7w!5e0!3m2!1sja!2sjp!4v1684070855218!5m2!1sja!2sjp",
} as const;

export const businessInfo = {
  openingHours: ["9:30 ~ 19:00", "基本的に年中無休(不定休)"],
  phones: [
    { label: "携帯", number: "080-5005-8074" },
    { label: "店舗", number: "048-944-2552" },
  ],
  note: "ご予約・ご相談はお気軽に",
} as const;
