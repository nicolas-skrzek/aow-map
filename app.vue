<script lang="ts" setup>
  //https://nuxt.com/docs/getting-started/seo-meta
  import { MARKER_LEGEND } from '@/utils/main.const'
  import MARKERS from '@/data/markers.json'
  import SHIPS from '@/data/ships.json'
  const config = useRuntimeConfig()

  const SHOW_DRAGABLE_MARKER = config.public.ShowDragableMarker

  const title = ref('Age of Water Map')
  const description = ref('Age of Water Map')
  const base = ref('https://nicolas-skrzek.github.io/aow-map/')

  useSeoMeta({
    title,
    description,
    base,
    ogTitle: title,
    ogDescription: description,
    ogUrl: base,
    ogLocale: 'fr_FR',
    ogType: 'article'
  })

  const locationMarker = ref(null)

  const bounds = [[0,0], [110,180]]

  const legends = ref({...MARKER_LEGEND})

  const urlMapParts = `/${config.public.NodeEnv !== 'production' ? '' : 'aow-map/' }assets/map_parts/{z}/{x}/{y}.png`

  const displayLocationMarker = (value) => {
    locationMarker.value = value
  }
  
  const toggleSubList = (event) => {
    if(legends.value[event.key]?.ships) {
      legends.value[event.key]?.ships.forEach(ship => ship.show = event.show)
    }
  }

  const toggleAllMarker = (show) => {
    Object.keys(legends.value).forEach((key, index) => {
      legends.value[key].show = show

      toggleSubList({key, show})
    })
  }
</script>
<template>
  <UiLegend
    :legends="legends"
    :locationMarker="locationMarker"
    :showLocationMarker="SHOW_DRAGABLE_MARKER"
    @click:show="toggleAllMarker(true)"
    @click:hide="toggleAllMarker(false)"
    @update:group="toggleSubList"
    />
  <LMap
    style="height: 100vh"
    :zoom="3"
    :center="[0, 0]"
    :use-global-leaflet="false"
    :min-zoom="2"
    :max-zoom="6"
    :bounds="bounds"
  >
    <LTileLayer
      :url="urlMapParts"
      :noWrap="true"
    />
    <MarkerPoint :list="MARKERS.data" :radius="4" :legends="legends" />
    <MarkerShip :list="SHIPS.data" :legends="legends" />
    
    <LMarker v-if="SHOW_DRAGABLE_MARKER" :lat-lng="[0,0]" draggable @update:latLng="displayLocationMarker"></LMarker>
  </LMap>
</template>
