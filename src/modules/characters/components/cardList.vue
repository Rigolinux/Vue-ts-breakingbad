
<script setup lang="ts">
import {useCharacters} from '@/modules/characters/composables/useCharacters';

const { isLoading, errorMessage,hasError ,characters} = useCharacters();
console.log(characters)


</script>

<template>
<div>
    <h1 v-if="isLoading">
        Loading ....
    </h1>
    <h1 v-if="hasError">
        {{ errorMessage }}
    </h1>
    <ul>
        <li v-for="(character,index) in characters" :key="index">
            {{ character.author }} -
            {{ character.quote }}
        </li>
    </ul>
</div>
</template>

<style scoped> </style>
