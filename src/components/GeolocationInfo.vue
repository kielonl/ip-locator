<template>
  <div class="geolocation-info-container">
    <div class="info-cell">
      <div class="info-header">IP ADDRESS</div>
      <br />
      <div class="info-content">{{ info.ip }}</div>
    </div>
    <div class="info-cell">
      <div class="info-header">LOCATION</div>
      <br />
      <div class="info-content">{{ info.location }}</div>
    </div>
    <div class="info-cell">
      <div class="info-header">TIMEZONE</div>
      <br />
      <div class="info-content">{{ info.timezone }}</div>
    </div>
    <div class="info-cell">
      <div class="info-header">ISP</div>
      <br />
      <div class="info-content">{{ info.isp }}</div>
    </div>
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
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 1rem;
  z-index: 2;
  position: relative;
  left: -50%;
  margin-top: -5rem;

  .info-header {
    font-size: 0.8rem;
    color: hsl(0, 0%, 49%);
    position: relative;
  }
  .info-cell {
    background: black;
    padding: 1rem 1rem;
    margin: 2rem 0rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
  }
  .info-cell:not(:last-child) {
    border-right: 2px solid #e1e1e1;
  }
  .info-content {
    font-size: 30px;
    color: hsl(0, 0%, 17%);
    text-align: left;
  }
}
@media (max-width: 375px) {
  .geolocation-info-container {
    flex-direction: column;
    margin: 0;

    .info-cell {
      text-align: center;

      padding: 0.5rem 3rem;
      margin: 0;
    }
    .info-content {
      text-align: center;
      font-size: 20px;
    }
    .info-cell:not(:last-child) {
      border-right: none;
    }
    /*div {
      margin: unset;
      padding: 2rem;
      padding-right: unset;
    }
    div:not(:last-child) {
      border-right: unset;
      padding-right: unset;
    }
    */
  }
}
</style>
