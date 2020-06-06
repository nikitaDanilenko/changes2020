<template>
  <p>Hello World</p>
</template>

<script>
// @ is an alias to /src
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
