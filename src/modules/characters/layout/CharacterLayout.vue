<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue';
import { characterRouter } from '../router';
import type { RouterLink } from '@/router/link-routes';

const routeLinks: RouterLink[] = characterRouter.children!
.filter((route) => (route.props  as {title:string, visible: boolean} ).visible)
.map((route) => {
  return {
    name: route.name as string,
    path: route.path!,
    title: (route.props  as {title:string, visible: boolean} ).title
  }
})

</script>


<template>
  <div>
    <h1>
        Personajes
    </h1>
    <NavBar title="Navegador"
     :show-icon="false"
      :links="routeLinks"
     ></NavBar>
    <router-view />

  </div>
</template>

<style scoped> </style>