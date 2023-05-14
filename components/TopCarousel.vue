<script lang="ts" setup>
const slide = ref(1)
const autoplay = ref(true)
</script>

<template>
  <q-responsive :ratio="4/3">
    <q-carousel
      v-model="slide"
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
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
  </q-responsive>
</template>

<style scoped></style>
