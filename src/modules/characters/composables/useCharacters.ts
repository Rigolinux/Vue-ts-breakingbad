import { onMounted, ref } from 'vue';
import breakingBadApi from '../../../api/breakingBad';
import type { Character } from '@/modules/characters/interfaces/Character';
import axios from 'axios';

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {
    
    onMounted(async()=>{
    loadCharacters()
    })
    const loadCharacters = async () => {
        if (characters.value.length > 0) return;
        isLoading.value = true
        try {
            const { data } = await breakingBadApi.get<Character[]>('/quotes/10')
            characters.value = data
            isLoading.value = false
        } catch (error) {
            isLoading.value = false
            hasError.value = true
            if(axios.isAxiosError(error)){
                errorMessage.value = error.message
                return
            }
            errorMessage.value = JSON.stringify(error)
        }
    }

//const { data: characters } = await  breakingBadApi.get<Character[]>('/quotes/10')
    /* if(characters.value.length ==0)
    breakingBadApi.get<Character[]>('/quotes/10')
    .then((response) => {
        console.log(response.data)
        characters.value = response.data
        isLoading.value = false
    })  */


    return {
        characters,
        isLoading,
        hasError,
        errorMessage,
    }
};