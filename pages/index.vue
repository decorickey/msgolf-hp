<script lang="ts" setup>
</script>

<template>
  <div class="text-body1">
    <TopCarousel style="max-height: 400px;" />

    <TopAbout
      id="about"
      class="q-pa-lg q-mx-auto"
      style="max-width: 1024px;"
    />

    <div class="q-pa-xl bg-grey-4">
      <TheCraftsman
        class="q-mx-auto"
        style="max-width: 1024px;"
      />
    </div>

    <BusinessInfo
      id="info"
      class="q-pa-xl q-mx-auto"
      style="max-width: 1024px;"
    />

    <div class="q-pa-xl bg-grey-4">
      <AccessInfo
        id="access"
        class="q-mx-auto"
        style="max-width: 1024px;"
      />
    </div>
  </div>
</template>

<style scoped></style>
