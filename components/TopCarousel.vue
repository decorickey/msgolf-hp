<script lang="ts" setup>
const slide = ref(1)
const autoplay = ref(true)

const images = [
  "access01.jpg",
  // "access02.jpg",
  "info01.jpg",
  "main.jpg",
]
</script>

<template>
  <q-responsive :ratio="16/7">
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
        v-for="image, i of images"
        :key="i"
        :name="i"
        :img-src="image"
      />
    </q-carousel>
  </q-responsive>
</template>

<style scoped></style>
