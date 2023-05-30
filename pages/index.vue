<script lang="ts" setup></script>

<template>
  <div class="text-body1">
    <TopCarousel style="max-height: 400px;" />

    <TopAbout
      id="about"
      class="q-px-lg q-py-lg q-mx-auto"
      style="max-width: 1024px;"
    />

    <TwitterTimeline
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
      <TheCraftsman
        class="q-px-lg q-py-lg q-mx-auto"
        style="max-width: 1024px;"
      />
    </div>

    <BusinessInfo
      id="info"
      class="q-px-lg q-py-lg q-mx-auto"
      style="max-width: 1024px;"
    />

    <div class="bg-grey-4">
      <AccessInfo
        id="access"
        class="q-px-lg q-py-lg q-mx-auto"
        style="max-width: 1024px;"
      />
    </div>
  </div>
</template>

<style scoped></style>
