<template>
  <div
    class="card-wrapper"
    :style="{ borderBottom: `3px solid ${borderColor}` }"
  >
    <div class="card-wrapper__header">
      <p class="title">{{ title.toUpperCase() }}</p>
    </div>
    <slot name="card"></slot>
  </div>
</template>

<script>
import { computed } from 'vue';

const colorMap = {
  infections: 'darkslateblue',
  deaths: 'red',
  recovered: 'brown',
  infected: 'darkorange',
  totals: 'darkslateblue',
  changes: 'darkslateblue',
};

export default {
  props: {
    variant: {
      type: String,
      validator: (value) => {
        return (
          [
            'infections',
            'deaths',
            'recovered',
            'infected',
            'totals',
            'changes',
          ].indexOf(value) !== -1
        );
      },
    },
  },
  setup(props) {
    const title = computed(() => {
      switch (props.variant) {
        case 'infections':
          return 'total coronavirus infections';
        case 'deaths':
          return 'total deaths';
        case 'recovered':
          return 'total recovered';
        case 'infected':
          return 'currently infected';
        case 'totals':
          return 'daily totals';
        case 'changes':
          return 'daily changes';
        default:
          return '';
      }
    });

    return {
      title,
      borderColor: colorMap[props.variant],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  padding: 1.2em;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      margin: 0 0 8px;
      padding: 0;
      color: #616161;
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>
