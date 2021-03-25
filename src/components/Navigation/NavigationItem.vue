<template>
  <div :class="['wrapper', { active: isActive }]" @click="onClick">
    <div class="wrapper__container">
      <div v-if="isWorldStats" class="ordinal-number">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>
      <div v-else class="ordinal-number">{{ ordinalNumber }}</div>
      <div class="info">
        <p v-if="isWorldStats" class="info__title">All countries</p>
        <p v-else class="info__title">{{ country }}</p>
        <p class="info__total-infections">{{ totalInfections }} infections</p>
      </div>
    </div>
    <div class="wrapper__flag">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    totalInfections: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: false,
    },
    ordinalNumber: {
      type: Number,
      required: false,
    },
    isWorldStats: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    return {
      onClick() {
        emit('click');
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 50px;
  width: 100%;
  margin-bottom: 3px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: none;
  transition: 0.2s linear;

  &__container {
    margin-left: 10px;
    display: flex;
    align-items: center;

    .ordinal-number {
      height: 35px;
      width: 35px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: darkslateblue;
      color: white;
      border-radius: 50%;
    }

    .info {
      height: 35px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__title {
        margin: 0;
        font-weight: 700;
        font-size: 15px;
      }

      &__total-infections {
        margin: 0;
        font-weight: 300;
        font-size: 12px;
        color: grey;
      }
    }
  }

  &__flag {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    transition: 0.2s linear;
  }

  &:hover {
    background-color: aliceblue;
    cursor: pointer;

    .wrapper__flag {
      margin-right: 5px;
    }
  }
}

.active {
  background-color: aliceblue;
}
</style>
