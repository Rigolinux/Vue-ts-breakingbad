<script setup lang="ts">
import CardList from '@/modules/characters/components/cardList.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    default: true
  }
})
console.log(props)

</script>

<template>
  <div>
    <h1>
        character List
    </h1>
    
    <CardList />
  </div>
</template>

<style scoped> </style>
