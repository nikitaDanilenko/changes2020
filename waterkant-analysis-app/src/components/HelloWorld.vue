<template>
  <div class="small">
    <!-- <bar :chart-data="datacollection"></bar>
    <button @click="fillData()">Randomize</button>-->
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
// import Bar from "./Bar.js";
import Chart from "chart.js";
import planetChartData from "./chart-data.js";

export default {
  // components: {
  //   Bar
  // },
  data() {
    return {
      datacollection: null,
      planetChartData: planetChartData
    };
  },
  mounted() {
    // this.fillData();
    this.createChart("planet-chart", this.planetChartData);
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>