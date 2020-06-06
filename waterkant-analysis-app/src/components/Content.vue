<template>
  <div class="size">
    <v-card color="#ff9800" dark>
      <h2>Bäckerei Daten</h2>
    </v-card>
    <v-container fluid>
      <v-row align="right">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Datensatz-Auswahl" @change="changeBakeryDataSet"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <canvas id="bakeryChart"></canvas>

    <v-card color="#ff9800" dark>
      <h2>Sprottenflotte Daten</h2>
    </v-card>
    <v-container fluid>
      <v-row align="right">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Datensatz-Auswahl" @change="changeBikesharingDataSet"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <canvas id="bikesharingChart"></canvas>

    <v-card color="#ff9800" dark>
      <h2>Online Helpdesk Daten</h2>
    </v-card>
    <v-container fluid>
      <v-row align="right">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Datensatz-Auswahl" @change="changeBikesharingDataSet"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <canvas id="helpdeskChart"></canvas>

    <v-card color="#ff9800" dark>
      <h2>Fußgängerbewegungen Daten</h2>
    </v-card>
    <v-container fluid>
      <v-row align="right">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Datensatz-Auswahl" @change="changeBikesharingDataSet"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <canvas id="pedestrianChart"></canvas>
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
    this.createChart("bakeryChart", this.planetChartData);
    this.createChart("bikesharingChart", this.planetChartData);
    this.createChart("helpdeskChart", this.planetChartData);
    this.createChart("pedestrianChart", this.planetChartData);
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
    changeBakeryDataSet(event) {
      if (event == planetChartData.name) {
        this.createChart("bakeryChart", this.planetChartData);
      } else if (event == planetChartData2.name) {
        this.createChart("bakeryChart", this.planetChartData2);
      }
    },
    changeBikesharingDataSet(event) {
      if (event == planetChartData.name) {
        this.createChart("bikesharingChart", this.planetChartData);
      } else if (event == planetChartData2.name) {
        this.createChart("bikesharingChart", this.planetChartData2);
      }
    },
    changeOnlineHelpdeskDataSet(event) {
      if (event == planetChartData.name) {
        this.createChart("helpdeskChart", this.planetChartData);
      } else if (event == planetChartData2.name) {
        this.createChart("helpdeskChart", this.planetChartData2);
      }
    },
    changePedestrianDataSet(event) {
      if (event == planetChartData.name) {
        this.createChart("pedestrianChart", this.planetChartData);
      } else if (event == planetChartData2.name) {
        this.createChart("pedestrianChart", this.planetChartData2);
      }
    }
  }
};
</script>

<style>
.size {
  max-width: 800px;
  margin: 50px auto;
}

canvas {
  margin-bottom: 75px;
}
</style>