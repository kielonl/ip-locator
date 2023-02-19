<template>
  <div>
    <div ref="mapDiv" class="map-container"></div>
  </div>
</template>

<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader";
import { onMounted, ref } from "vue";

interface Props {
  location: { lat: number; lng: number };
}
const props = defineProps<Props>();

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
});
const mapDiv = ref(null);

onMounted(async () => {
  await loader.load();
  const map = new google.maps.Map(mapDiv.value, {
    center: props.location,
    zoom: 14,
  });

  new google.maps.Marker({
    position: props.location,
    map: map,
  });
});
</script>

<style lang="scss">
.map-container {
  width: 100%;
  height: 70vh;
}
</style>
