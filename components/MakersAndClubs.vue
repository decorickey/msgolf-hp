<script lang="ts" setup>
interface Brand {
  name: string;
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
    // clubs: [
    //   {
    //     images: ["club-1-1.jpg", "club-1-2.jpg"],
    //     label: "あああ",
    //     slide: 1,
    //   },
    //   {
    //     images: ["club-2-1.jpg"],
    //     label: "いいい",
    //     slide: 1,
    //   },
    // ],
  },
  {
    name: "baldo",
    // clubs: [
    //   {
    //     images: ["club-1-1.jpg"],
    //     label: "あああ",
    //     slide: 1,
    //   },
    // ],
  },
  {
    name: "buddy",
  },
  {
    name: "forebes",
  },
  {
    name: "gorilla",
  },
  {
    name: "jbeam",
  },
  {
    name: "kyoei",
  },
  {
    name: "maxsoul",
  },
  {
    name: "miura",
  },
  {
    name: "mystery",
  },
  {
    name: "romaro",
  },
])
</script>

<template>
  <div>
    <h2 class="text-h5 text-center">
      取り扱いメーカー
    </h2>

    <p class="text-center">
      様々なメーカーのゴルフクラブを取り扱っております。
    </p>

    <div class="row">
      <div
        v-for="(brand, i) of brands"
        :key="i"
        class="col-12 col-md-4"
      >
        <q-list bordered>
          <q-expansion-item
            class="box-shadow-1"
            group="makers"
            header-class="q-pr-none"
          >
            <template #header>
              <q-img
                class="q-mr-sm"
                :src="`brands/${brand.name}/logo.png`"
              />
            </template>

            <q-card>
              <q-card-section>
                <div class="row">
                  <div
                    v-for="(club, j) of brand.clubs"
                    :key="j"
                    class="col-12"
                  >
                    <q-responsive :ratio="4/3">
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
  </div>
</template>

<style scoped></style>
