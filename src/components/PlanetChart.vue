<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>


<script>
import Chart from 'chart.js'
import planetChartData from '../planetData'

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
}
</script>


<style scoped>
canvas{

  width:950px !important;
  height:200px !important;

}
</style>