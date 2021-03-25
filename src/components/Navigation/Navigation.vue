<template>
  <div class="navigation-wrapper">
    <input />
    <NavigationItem :totalInfections="getTotalInfections()" isWorldStats />
    <NavigationItem
      v-for="country in countries"
      :key="country.name"
      :country="country.name"
      :totalInfections="country.totalInfections"
      :ordinalNumber="getOrdinalNumber(country.name)"
    />
  </div>
</template>

<script>
import _findIndex from 'lodash/findIndex';
import _reduce from 'lodash/reduce';

import NavigationItem from './NavigationItem.vue';

export default {
  name: 'Navigation',
  components: { NavigationItem },
  props: {
    countries: {
      type: Array,
    },
  },
  setup(props) {
    const getOrdinalNumber = (name) =>
      _findIndex(props.countries, { name }) + 1;
    const getTotalInfections = () =>
      _reduce(
        props.countries,
        (result, currentItem) => result + currentItem.totalInfections,
        0,
      );
    return {
      getOrdinalNumber,
      getTotalInfections,
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
