<script setup lang="ts">
  import { IMarkerLegend } from '@/types/marker'

  export interface IShipData {
    id: string;
    rank: string;
    description: string;
    coords: [number, number][];
  }
  
  export interface IShip {
    groupName?: string;
    list: IShipData[];
    legends?: IMarkerLegend
  }
  
  const props = withDefaults(defineProps<IShip>(), {
    groupName: "ships",
    legends: undefined,
  })

  const getShipLegend = (rank: string, id: string): string => props.legends[`rank${rank}`]?.ships.find(ship => ship.id === id)
</script>
<template>
  <LLayerGroup :name="groupName">
    <template v-for="ship in list" :key="ship.id">
      <template v-for="(coord, i) in ship.coords" :key="`${groupName}_${ship.id}_${i}`">
        <LMarker
          v-if="legends && legends[`rank${ship.rank}`] && getShipLegend(ship.rank, ship.id).show"
          :lat-lng="coord"
        >
          <LIcon :icon-url="`/assets/icons/${legends[`rank${ship.rank}`]?.icon}.png`" :icon-size="[20,20]" />
          <LPopup>
            <h4 class="mb-2 font-semibold">
              {{ getShipLegend(ship.rank, ship.id).title}} {{ `(T${ship.rank})` }}
            </h4>
            <template v-if="ship.description">
              <div class="mb-5">{{ship.description}}</div>
            </template>
          </LPopup>
        </LMarker>
      </template>
    </template>
  </LLayerGroup>
</template>