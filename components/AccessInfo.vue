<script lang="ts" setup></script>

<template>
  <div>
    <ContentTitle>
      アクセス
    </ContentTitle>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <div
          class="column justify-center"
          style="height: 100%;"
        >
          <p class="q-ma-none">
            MSゴルフファクトリー
          </p>
          <p class="q-ma-none">
            〒340-0044
          </p>
          <p>
            埼玉県草加市花栗2-11-24
          </p>
          <p class="q-ma-none">
            草加駅からバスで約10分
          </p>
          <p class="q-ma-none">
            駐車場有：お車でのご来店も歓迎です
          </p>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <q-img
          src="exterior.jpg"
          style="max-height: 300px;"
          :ratio="16/9"
        />
      </div>

      <div class="col-12">
        <q-responsive
          :ratio="16/9"
          style="max-height: 400px;"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25876.306406317817!2d139.7509361743164!3d35.835802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601891493b04a949%3A0xf1f430560d2bb3c3!2zTVPjgrTjg6vjg5Xjg5XjgqHjgq_jg4jjg6rjg7w!5e0!3m2!1sja!2sjp!4v1684070855218!5m2!1sja!2sjp"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </q-responsive>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
