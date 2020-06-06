<template>
  <div class="size">
    <v-container fluid>
      <v-row align="right">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Datensatz-Auswahl" @change="changeDataSet"></v-select>
        </v-col>
        <!-- <v-btn> </v-btn> -->
      </v-row>
    </v-container>
    <canvas id="chart1"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./ChartData.js";
import planetChartData2 from "./ChartData2.js";

export default {
  // components: {
  //   Bar
  // },
  data() {
    return {
      datacollection: null,
      planetChartData: planetChartData,
      planetChartData2: planetChartData2,
      items: [planetChartData.name, planetChartData2.name]
    };
  },
  mounted() {
    this.createChart("chart1", this.planetChartData);
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },
    changeDataSet(event) {
      if (event == "Foo") {
        this.createChart("chart1", this.planetChartData);
      } else if (event == "Bar") {
        this.createChart("chart1", this.planetChartData2);
      }
      // this.createChart("chart1", event);
      console.log(event);
    }
  }
};
</script>

<style>
.size {
  max-width: 800px;
  margin: 150px auto;
}
</style>