<template>
  <div class="navigation-wrapper">
    <Input :searchPhrase="searchPhase" @change="handleChangePhrase" />
    <NavigationItem :totalInfections="getTotalInfections()" isWorldStats />
    <NavigationItem
      v-for="country in filteredCountries"
      :key="country.name"
      :country="country.name"
      :totalInfections="country.totalInfections"
      :ordinalNumber="getOrdinalNumber(country.name)"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import _findIndex from 'lodash/findIndex';
import _reduce from 'lodash/reduce';

import Input from '../Input/Input.vue';
import NavigationItem from './NavigationItem.vue';

export default {
  name: 'Navigation',
  components: { NavigationItem, Input },
  props: {
    countries: {
      type: Array,
    },
  },
  setup(props) {
    const filteredCountries = ref(props.countries);
    const searchPhase = ref('');

    const getOrdinalNumber = (name) =>
      _findIndex(props.countries, { name }) + 1;

    const getTotalInfections = () =>
      _reduce(
        props.countries,
        (result, currentItem) => result + currentItem.totalInfections,
        0,
      );

    const handleChangePhrase = (value = '') => {
      filteredCountries.value = props.countries.filter((item) => {
        return item.name.toLowerCase().includes(value);
      });
    };

    return {
      filteredCountries,
      searchPhase,
      getOrdinalNumber,
      getTotalInfections,
      handleChangePhrase,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation-wrapper {
  width: 300px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: lightgrey;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
  &::-webkit-scrollbar-track {
    background: whitesmoke;
    border-radius: 4px;
  }
}
</style>
