<template>
  <div class="geolocation-info-container">
    <div>IP ADDRESS<br />{{ info.ip }}</div>
    <div>LOCATION<br />{{ info.location }}</div>
    <div>TIMEZONE<br />{{ info.timezone }}</div>
    <div>ISP<br />{{ info.isp }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  info: { ip: string; location: string; timezone: string; isp: string };
}
defineProps<Props>();
</script>

<style scoped lang="scss">
.geolocation-info-container {
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 1rem;
  z-index: 2;
  margin-top: 5rem;
  div {
    padding: 3rem;
  }
  div:not(:last-child) {
    border-right: 2px solid #e1e1e1;
  }
}
@media (max-width: 375px) {
  .geolocation-info-container {
    flex-direction: column;
    div {
      padding: 1rem;
    }
    div:not(:last-child) {
      border-right: none;
      border-bottom: 2px solid #e1e1e1;
    }
  }
}
</style>
