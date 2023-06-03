<script lang="ts" setup></script>

<template>
  <div class="text-body1">
    <TopCarousel style="max-height: 400px;" />

    <TopAbout
      id="about"
      class="q-px-lg q-py-lg q-mx-auto"
      style="max-width: 1024px;"
    />

    <TopInfo
      class="q-px-lg q-py-lg q-mx-auto"
      style="max-width: 1024px;"
    />

    <WorkshopMenu 
      id="menu"
      class="q-px-lg q-py-lg q-mx-auto"
      style="max-width: 1024px;"
    />

    <MakersAndClubs
      id="makers"
      class="q-px-lg q-py-lg q-mx-auto"
      style="max-width: 1024px;"
    />

    <div class="bg-grey-4">
      <BusinessInfo
        id="info"
        class="q-px-lg q-py-lg q-mx-auto"
        style="max-width: 1024px;"
      />
    </div>

    <AccessInfo
      id="access"
      class="q-px-lg q-py-lg q-mx-auto"
      style="max-width: 1024px;"
    />
  </div>
</template>

<style scoped></style>
