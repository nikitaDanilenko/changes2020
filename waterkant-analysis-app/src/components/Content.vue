<template>
  <div class="size">
    <v-card color="#ff9800" dark>
      <h2>Bäckerei Daten im Durchschnitt von 30 Tagen</h2>
      <h3>16. bis 23. März (Hamsterkäufe + Absturz)</h3>
      <h3>17. April (Einzelhandelseröffnung bis 800m²)</h3>
      <h3>18. Mai (Reduzierung Kontaktsperre)</h3>
      <h3>19. Mai Eröffnung Gastronomie</h3>
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
      <h2>Sprottenflotte Daten im Durchschnitt von 14 Tagen</h2>
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
      <h2>Fußgängerbewegungen Daten im Durchschnitt von 30 Tagen</h2>
    </v-card>
    <v-container fluid>
      <v-row align="right">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Datensatz-Auswahl" @change="changePedestrianDataSet"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <canvas id="pedestrianChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import bakeryChartData from "./BakeryData.js";
import bikesharingChartData from "./BikesharingData";
import pedestrianChartData from "./PedestrianData";

export default {
  data() {
    return {
      datacollection: null,
      bakeryChartData: bakeryChartData,
      bikesharingChartData: bikesharingChartData,
      pedestrianChartData: pedestrianChartData,
    };
  },
  mounted() {
    this.createChart("bakeryChart", this.bakeryChartData);
    this.createChart("bikesharingChart", this.bikesharingChartData);
    this.createChart("pedestrianChart", this.pedestrianChartData);
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
      if (event == bakeryChartData.name) {
        this.createChart("bakeryChart", this.bakeryChartData);
      }
    },
    changeBikesharingDataSet(event) {
      if (event == bikesharingChartData.name) {
        this.createChart("bikesharingChart", this.bikesharingChartData);
      } 
    },
    changePedestrianDataSet(event) {
      if (event == pedestrianChartData.name) {
        this.createChart("pedestrianChart", this.pedestrianChartData);
      } 
    },
  }
};
</script>

<style>
.size {
  max-width: 800px;
  margin: 50px auto;
}

h2 {
  margin-left: 20px;
}

h3 {
  margin-left: 30px;
}
canvas {
  margin-bottom: 75px;
}
</style>