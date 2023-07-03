<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
const decrease = () => {
      counter.value--;
    };
/* 
old version requieres imports
export default defineComponent({
  name: 'App',
  setup() {
    
    //methods
    const decrease = () => {
      counter.value--;
    };

    return {
      counter,
      decrease,
    };
  },
}); */

</script>

<template>
  <div class="wrapper">
    <h1>Counter {{ counter }} </h1>
    <button @click="counter++">Increment</button>
    <button @click="decrease">Decrement</button>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
