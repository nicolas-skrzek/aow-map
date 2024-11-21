<script setup lang="ts">
  import { IMarkerLegend } from '@/types/marker'

  export interface IMarkerData {
    type: string;
    id?: string;
    name?: string;
    description?: string;
    coords: [number, number][];
    actions?: string[];
  }

  export interface IMarker {
    groupName?: string;
    list: IMarkerData[];
    radius?: number;
    legends?: IMarkerLegend
  }

  const props = withDefaults(defineProps<IMarker>(), {
    groupName: "markers-group",
    radius: 6,
    legends: undefined,
  })
</script>
<template>
  <LLayerGroup :name="groupName">
    <template v-for="(marker, p) in list" :key="p">
      <template v-for="(coord, i) in marker.coords" :key="`${groupName}_${p}_${i}`">
        <LCircleMarker
          v-if="marker?.type && legends && legends[marker.type]?.show"
          :lat-lng="coord"
          :radius="radius"
          :color="legends[marker.type]?.color || '#22d3ee'"
        >
          <LPopup>
            <h4 v-if="marker?.name" class="mb-2 font-semibold">{{ marker.name }}</h4>
            <h4 v-else class="mb-2 font-semibold">{{ legends[marker.type]?.title }}</h4>
            <template v-if="marker.description">
              <div :class="{'mb-5': marker?.actions && marker?.actions?.length !== 0 }">
                {{ marker.description }}
              </div>
            </template>
            <template v-if="marker?.actions && marker?.actions?.length !== 0">
              <div class="flex gap-2">
                <img
                  class="max-h-5"
                  v-for="action in marker.actions"
                  :key="action"
                  :src="`/assets/icons/${action}.png`"
                  :alt="action"
                  :width="20"
                  :title="action"
                  >
              </div>
            </template>
          </LPopup>
        </LCircleMarker>
      </template>
    </template>
  </LLayerGroup>
</template>