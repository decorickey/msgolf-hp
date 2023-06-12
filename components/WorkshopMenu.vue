<script lang="ts" setup>
const slide = ref(1)
const autoplay = ref(true)
</script>

<template>
  <div>
    <ContentTitle>
      工房メニュー
    </ContentTitle>

    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-6">
        <div
          class="q-pa-lg bg-grey-4 border-radius"
        >
          <h3 class="text-h5 text-center">
            オーダーメイドクラブ<br>製造・販売
          </h3>

          <p>
            長年培ってきたクラブ制作・フィッティングの経験を活かし、悩めるゴルファーにぴったりのクラブをお作りします。
          </p>
        </div>

        <q-responsive
          class="q-mt-lg"
          :ratio="16/9"
        >
          <q-carousel
            v-model="slide"
            class="border-radius"
            animated
            arrows
            infinite
            navigation
            transition-prev="slide-right"
            transition-next="slide-left"
            :autoplay="autoplay"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide
              :name="1"
              img-src="order.jpg"
            />
            <q-carousel-slide
              :name="2"
              img-src="hitting.jpg"
            />
          </q-carousel>
        </q-responsive>
      </div>

      <div class="col-12 col-md-6">
        <div
          class="q-pa-lg bg-grey-4 border-radius"
          style="height: 100%;"
        >
          <h3 class="text-h5 text-center">
            クラブ修理<br>チューニング
          </h3>

          <p class="q-ma-none">
            ・グリップ交換
          </p>
          <p class="q-ma-none">
            ・シャフト入れ替え(スパイン調整)
          </p>
          <p class="q-ma-none">
            ・シャフトカット(伸ばし)
          </p>
          <p class="q-ma-none">
            ・ウッドパター塗替え
          </p>
          <p class="q-ma-none">
            ・アイアン パター ロフト/ライ調整
          </p>
          <p>
            ・キャディバッグ修理 <span class="q-ml-lg">など</span>
          </p>

          <p class="q-ma-none">
            ※その他作業も承ります
          </p>
          <p class="q-pl-sm">
            お気軽にご相談ください。
          </p>

          <p>
            ※測定機つき試打場あります
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-radius {
  border-radius: 5px;
}
</style>
