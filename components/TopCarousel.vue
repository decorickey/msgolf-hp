<script lang="ts" setup>
const slide = ref(1)
const autoplay = ref(true)

const images = [
  "carousel/P1017218-2.jpg",
  "carousel/P1017120-2.jpg",
  "carousel/P1017133-2.jpg",
  "carousel/P1017155-2.jpg",
  "carousel/P1017201-2.jpg",
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
