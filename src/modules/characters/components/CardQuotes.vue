<script setup lang="ts">

// get the props
import type { Character } from '../interfaces/Character';


 defineProps({
    character: {
        type: Object as () => Character,
        required: true
    }
});



</script>

<template>
    <div class="character-card" >
        <h3>{{ character.author }}</h3><p>{{ character.quote }}</p>

    </div>
</template>


<style scoped>
.character-card {
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px; 
}
</style>