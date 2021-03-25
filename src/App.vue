<template>
  <div id="nav"><router-link to="/">Home</router-link></div>
  <router-view />
</template>

<script>
import { ref, onMounted } from 'vue';
import _forEach from 'lodash/forEach';

export default {
  setup() {
    const data = ref([]);

    const fetchData = async () => {
      const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases');
      const json = await response.json();

      _forEach(json, (value, key) => {
        const {
          confirmed,
          recovered,
          deaths,
          abbreviation,
          updated,
        } = value.All;
        data.value.push({
          name: key,
          totalInfections: confirmed,
          totalRecovered: recovered,
          totalDeaths: deaths,
          code: abbreviation,
          lastUpdated: updated,
        });
      });
    };

    onMounted(fetchData);

    return {
      data,
    };
  },
};
</script>
