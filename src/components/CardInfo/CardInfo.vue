<template>
  <Card :variant="variant">
    <template v-slot:card>
      <div :class="[{ main: isMain }, 'number-wrapper']">
        <h1 class="number">{{ number }}</h1>
        <div class="gain">
          <div class="icon" />
          {{ gain }}
        </div>
      </div>
      <div class="description">
        {{ description }}
      </div>
    </template>
  </Card>
</template>

<script>
import Card from '../Card/Card.vue';

export default {
  components: { Card },
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
    number: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gain: {
      type: Number,
      required: false,
      default: null,
    },
    isMain: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.number-wrapper {
  display: flex;

  .number {
    margin: 0 16px 0 0;
    padding: 0;
    font-size: 40px;
    font-weight: bold;
  }

  .gain {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: red;
    font-weight: bold;

    .icon {
      width: 0;
      height: 0;
      margin-right: 8px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid red;
    }
  }
}

.main {
  .number {
    font-size: 80px;
  }
  .gain {
    font-size: 18px;
  }
}

.description {
  margin: 8px 0 0;
  color: grey;
  font-size: 12px;
}
</style>
