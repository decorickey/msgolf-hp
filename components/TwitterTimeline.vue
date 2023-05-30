<script lang="ts" setup>
useHead({
  script: [
    {
      type: "text/javascript",
      async: true,
      src: "https://platform.twitter.com/widgets.js",
    },
  ],
})
</script>

<template>
  <div>
    <h2 class="text-h5 text-center">
      おしらせ
    </h2>

    <q-card
      bordered
      flat
    >
      <q-card-section class="q-pa-sm">
        <q-scroll-area style="height: 300px;">
          <a
            class="twitter-timeline"
            data-lang="ja"
            data-width="100%"
            data-height="400"
            href="https://twitter.com/ms_golf?ref_src=twsrc%5Etfw"
          />
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
