<script setup lang="ts">
import { scroll } from "quasar"

useHead({
  title: "MSゴルフファクトリー 埼玉県草加市のゴルフクラブ工房"
})

const rightDrawer = ref(false)
const { getScrollTarget, setVerticalScrollPosition } = scroll

const scrollItems = [
  { label: "当店について", id: "about"},
  { label: "工房メニュー", id: "menu"},
  { label: "取り扱いメーカー＆クラブ", id: "makers"},
  { label: "営業案内", id: "info"},
  { label: "アクセス", id: "access"},
]

function scrollToElement (id: string) {
  rightDrawer.value = false
  const el = document.getElementById(id) as HTMLElement
  const target = getScrollTarget(el)
  const offset = el.offsetTop
  const duration = 400
  setVerticalScrollPosition(target, offset, duration)
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="bg-white text-black"
      elevated
      reveal
    >
      <q-toolbar>
        <q-toolbar-title class="row space-between">
          <q-space />

          <div class="col-10 col-md-12">
            <q-img
              fit="scale-down"
              height="40px"
              src="logo.png"
            />
          </div>
        </q-toolbar-title>

        <div class="col-1 mobile-only">
          <q-btn
            dense
            flat
            round
            icon="menu"
            @click="rightDrawer = true"
          />
        </div>
      </q-toolbar>

      <q-tabs class="desktop-only">
        <q-route-tab
          v-for="item, i of scrollItems"
          :key="i"
          :label="item.label"
          @click="scrollToElement(item.id)"
        />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="rightDrawer"
      side="right"
      behavior="mobile"
      elevated
    >
      <q-list>
        <q-item class="row justify-end">
          <q-btn
            class="q-pa-none"
            flat
            square
            icon="close"
            @click="rightDrawer = false"
          />
        </q-item>

        <q-item
          v-for="item, i of scrollItems"
          :key="i"
          v-ripple
          class="q-px-xl"
          clickable
          @click="scrollToElement(item.id)"
        >
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
