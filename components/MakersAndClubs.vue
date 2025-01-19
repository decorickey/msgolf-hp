<script lang="ts" setup>
interface Brand {
  name: string;
  image: string;
  clubs?: Club[];
}
interface Club {
  images: string[];
  label: string;
  slide: number;
}

const brands = reactive<Brand[]>([
  {
    name: "afd",
    image: "logo.png",
  },
  {
    name: "agrind",
    image: "logo.png",
    clubs: [
      {
        images: ["club-1-1.jpg", "club-1-2.jpg", "club-1-3.jpg"],
        label: "",
        slide: 1,
      },
      {
        images: ["club-2-1.jpg", "club-2-2.jpg", "club-2-3.jpg"],
        label: "",
        slide: 1,
      },
    ],
  },
  {
    name: "baldo",
    image: "logo.png",
  },
  {
    name: "buddy",
    image: "logo.png",
  },
  {
    name: "epon",
    image: "logo.svg",
    clubs: [
      {
        images: ["club-4-1.jpeg"],
        label: "",
        slide: 1,
      },
      {
        images: ["club-3-1.JPG", "club-3-2.JPG", "club-3-3.JPG"],
        label: "",
        slide: 1,
      },
      {
        images: ["club-2-1.jpeg", "club-2-2.jpeg", "club-2-3.jpeg"],
        label: "",
        slide: 1,
      },
      {
        images: ["club-1-1.jpeg"],
        label: "",
        slide: 1,
      },
    ],
  },
  {
    name: "forebes",
    image: "logo.png",
  },
  {
    name: "gorilla",
    image: "logo.png",
  },
  {
    name: "jbeam",
    image: "logo.png",
  },
  {
    name: "kyoei",
    image: "logo.png",
  },
  {
    name: "masda",
    image: "logo.png",
    clubs: [
      {
        images: ["club-1-1.jpg", "club-1-2.jpg"],
        label: "",
        slide: 1,
      }
    ]
  },
  {
    name: "maxsoul",
    image: "logo.png",
  },
  {
    name: "minervagolf",
    image : "logo.jpg",
    clubs: [
      {
        images: ["club-1-1.jpeg", "club-1-2.jpeg"],
        label: "",
        slide: 1,
      },
    ]
  },
  {
    name: "miura",
    image: "logo.png",
  },
  {
    name: "mystery",
    image: "logo.png",
  },
  {
    name: "razzle",
    image: "logo.png",
  },
  {
    name: "romaro",
    image: "logo.png",
    clubs: [
      {
        images: ["club-1-1.jpeg"],
        label: "",
        slide: 1,
      },
      {
        images: ["club-2-1.jpeg"],
        label: "",
        slide: 1,
      },
    ],
  },
])
</script>

<template>
  <div>
    <ContentTitle>
      取り扱いメーカー
    </ContentTitle>

    <p class="text-center">
      様々なメーカーのゴルフクラブを取り扱っております。
    </p>

    <div class="row items-center items-stretch">
      <q-list
        v-for="(brand, i) of brands"
        :key="i"
        class="col-12 col-md-4"
        bordered
      >
        <q-expansion-item group="makers">
          <template #header>
            <q-item-section>
              <q-img
                :src="`brands/${brand.name}/${brand.image}`"
                fit="contain"
                height="80px"
              />
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              <div class="row">
                <div
                  v-for="(club, j) of brand.clubs"
                  :key="j"
                  class="col-12"
                >
                  <q-responsive :ratio="1/1">
                    <q-carousel
                      v-model="club.slide"
                      animated
                      arrows
                      autoplay
                      navigation
                      infinite
                    >
                      <q-carousel-slide
                        v-for="(image, k) of club.images"
                        :key="k"
                        :name="k"
                        :img-src="`brands/${brand.name}/${image}`"
                      />
                    </q-carousel>
                  </q-responsive>

                  <p class="text-center q-mt-md">
                    {{ club.label }}
                  </p>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<style scoped></style>
