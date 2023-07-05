
<script setup lang="ts">
//import {useCharacters} from '@/modules/characters/composables/useCharacters';
import { useQuery } from '@tanstack/vue-query';
import type { Character } from '../interfaces/Character';
import breakingBadApi from '@/api/breakingBad';
import CardQuotes from './CardQuotes.vue';

const getCharacterSlow = async ():Promise<Character[]> => {

    return new Promise((resolve) => {
        setTimeout(async () => {
            const data = await breakingBadApi.get<Character[]>('/quotes/10')
            resolve(data.data);
        }, 2000);
    });
    
};

//! 2 composable fubctions
//const { isLoading, errorMessage,hasError ,characters} = useCharacters();

//! vue Query
const { isLoading, isError,data: characters ,error } = useQuery(['characters'],
    getCharacterSlow,
    {
        cacheTime: 1000 * 60, // 1 min
        refetchOnReconnect: 'always',
    }
);
</script>

<template>
<div>
    <h1 v-if="isLoading">
        Loading ....
    </h1>
    <h1 v-if="isError">
        {{ error }}
    </h1>
    <ul>
        <div class="card-list"  >
            <CardQuotes v-for="(character,index) in characters" :key="index" :character="character" >
               
            </CardQuotes>
        </div>
    </ul>
</div>
</template>

<style scoped> 

.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
