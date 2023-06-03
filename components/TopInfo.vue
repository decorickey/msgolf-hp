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

const informationList: {
  overline: Date,
  contents: string[],
}[] = [
  {
    overline: new Date("2023-06-01"),
    contents: ["ホームページが新しくなりました！"],
  },
]
</script>

<template>
  <div>
    <ContentTitle>
      おしらせ
    </ContentTitle>

    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6">
        <q-card
          bordered
          flat
        >
          <q-card-section class="q-pa-sm">
            <q-scroll-area style="height: 300px;">
              <q-list
                separator
              >
                <q-item
                  v-for="information, i of informationList"
                  :key="i"
                >
                  <q-item-section>
                    <q-item-label overline>
                      {{ information.overline.toLocaleDateString() }}
                    </q-item-label>
                    <q-item-label
                      v-for="content, j of information.contents"
                      :key="j"
                    >
                      {{ content }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
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
    </div>
  </div>
</template>

<style scoped></style>
