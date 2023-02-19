<template>
  <div id="app">
    <div class="header-wrapper">
      <h1>IP Address Tracker</h1>
      <div class="input-wrapper">
        <IpInput type="text" :value="ip" />
        <button @click="getGeolocation">></button>
      </div>
      <GeolocationInfo
        :info="{
          ip: '8.8.8.8',
          location: 'Brooklyn, NY 10001',
          timezone: 'UTC -05:00',
          isp: 'Space X Starlink',
        }"
      />
    </div>
    <IpMap :location="{ lat: 52.520007, lng: 13.404954 }" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import IpMap from "./components/IpMap.vue";
import IpInput from "./components/reusableComponents/IpInput.vue";
import { getIpInfo } from "./api/ipGeolocation";
import GeolocationInfo from "./components/GeolocationInfo.vue";

const ip = ref<string>("");

const getGeolocation = async () => {
  const result = await getIpInfo(ip.value);
};
</script>

<style scoped lang="scss">
#app {
  background-image: url("@/assets/pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.header-wrapper {
  width: 100vw;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    color: white;
  }
}
.input-wrapper {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  button {
    padding: 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
    background: hsl(0, 0%, 17%);
    color: white;
    outline: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
