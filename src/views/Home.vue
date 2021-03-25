<template>
  <div class="home">HOME</div>
  {{ data }}
</template>

<script>
import { ref, onMounted } from 'vue';
import _forEach from 'lodash/forEach';

export default {
  name: 'Home',
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
          country: key,
          totalInfections: confirmed,
          totalRecovered: recovered,
          totalDeaths: deaths,
          countryCode: abbreviation,
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
