<template>
  <div id="app">
    <div class="header-wrapper">
      <h1>IP Address Tracker</h1>
      <div class="input-wrapper">
        <IpInput type="text" v-model:value="ip" />
        <button @click="() => getGeolocation(ip)">></button>
      </div>
    </div>
    <div class="geo-wrapper">
      <GeolocationInfo :info="geoLocationInfo" />
    </div>
    <IpMap :location="{ lat: geoLocationInfo.lat, lng: geoLocationInfo.lng }" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import IpMap from "./components/IpMap.vue";
import IpInput from "./components/reusableComponents/IpInput.vue";
import { getIpInfo } from "./api/ipGeolocation";
import GeolocationInfo from "./components/GeolocationInfo.vue";

const ip = ref<string>("");
const geoLocationInfo = ref<{
  ip: string;
  location: string;
  timezone: string;
  isp: string;
  lat: number;
  lng: number;
}>({ ip: "", location: "", timezone: "", isp: "", lat: 10, lng: -15 });

const getGeolocation = async (ip: string) => {
  const result = await getIpInfo(ip);
  geoLocationInfo.value = { ...result.data };
  geoLocationInfo.value.location = `${result.data.location.region}, ${result.data.location.region}`;
  geoLocationInfo.value.timezone = result.data.location.timezone;
  geoLocationInfo.value.lat = result.data.location.lat;
  geoLocationInfo.value.lng = result.data.location.lng;
};

onMounted(async () => {
  await getGeolocation("8.8.8.8");
});
</script>

<style scoped lang="scss">
#app {
  background-image: url("@/assets/pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.header-wrapper {
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: white;
  }
}
.input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  button {
    padding: 1rem;
    border-radius: 0 1rem 1rem 0;
    background: hsl(0, 0%, 17%);
    color: white;
    outline: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
}

.geo-wrapper {
  position: absolute;
  left: 50%;
}
@media (max-width: 375px) {
}
</style>
