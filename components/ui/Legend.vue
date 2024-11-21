<script setup lang="ts">
  export interface IUILegend {
    legends: IMarkerLegend
    showLocationMarker?: boolean;
    locationMarker?: string;
  }

  const props = withDefaults(defineProps<IUILegend>(), {
    legends: undefined,
    showLocationMarker: false,
    locationMarker: undefined,
  })

  const emits = defineEmits(['click:show', 'click:hide', 'update:group'])
</script>
<template>
  <div class="fixed z-[1000] right-10 top-2 max-w-64 flex flex-col gap-3">
    <div
      v-if="showLocationMarker"
      class="py-2 px-3 bg-neutral-800/70 text-neutral-300 rounded-lg border-2 border-neutral-100/25"
    >
      <div>Marker location:</div>
      <div>{{ locationMarker || 'LatLng(0, 0)'}}</div>
    </div>
    <div class="py-2 px-3 bg-neutral-800/70 text-neutral-300 rounded-lg border-2 border-neutral-100/25">
      <ul>
        <li v-for="(legend, key) in legends" :key="key">
          <label class="flex gap-1 items-center">
            <input v-model="legend.show" type="checkbox" @change="$emit('update:group', {key, show: legend.show})">
            <span class="pr-1">{{ legend.title }}</span>
            <div v-if="legend.color" class="rounded-full w-3 h-3" :style="{'background-color': legend.color}"></div>
            <img v-if="legend.icon" :src="`/assets/icons/${legend.icon}.png`" :width="20">
          </label>

          <ul v-if="legend?.ships" class="pl-4">
            <li v-for="ship in legend.ships" :key="ship.id">
              <label class="flex gap-1 items-center">
                <input v-model="ship.show" type="checkbox">
                <span class="pr-1">{{ ship.title }}</span>
              </label>
            </li>
          </ul>
        </li>
      </ul>
      <div class="flex flex-col gap-1 mt-2">
        <button class="py-2 px-3 bg-neutral-300 text-neutral-800 rounded" @click="$emit('click:show')">Afficher tous</button>
        <button class="py-2 px-3 bg-neutral-300 text-neutral-800 rounded" @click="$emit('click:hide')">Cacher tous</button>
      </div>
    </div>
  </div>
</template>