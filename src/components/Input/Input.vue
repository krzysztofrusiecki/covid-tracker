<template>
  <div
    class="input-wrapper"
    @mouseenter="active = true"
    @mouseleave="active = false"
  >
    <input
      type="text"
      class="input-wrapper__input"
      placeholder="Enter a country..."
      v-model="phrase"
    />
    <div class="input-wrapper__icon">
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <div class="light-bar" />
    <div :style="{ width: active ? '100%' : 0 }" class="bold-bar" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    searchPhrase: {
      type: String,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const active = ref(false);

    const phrase = computed({
      get: () => props.searchPhrase,
      set: (value) => emit('change', value),
    });

    return {
      active,
      phrase,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  box-sizing: content-box;
  transition: 0.2s linear;

  &__input {
    height: 100%;
    width: 100%;
    padding: 0 10px;
    border: none;
    outline: none;
    font-size: 15px;
    letter-spacing: 0.6px;

    &::placeholder {
      font-size: 15px;
      letter-spacing: 0.6px;
    }
  }

  &__icon {
    height: 25px;
    width: 25px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: grey;
  }

  .light-bar {
    width: 100%;
    height: 1px;
    background-color: darkslateblue;
  }

  .bold-bar {
    width: 0;
    height: 1px;
    background-color: darkslateblue;
    transition: 0.2s linear;
  }
}
</style>
