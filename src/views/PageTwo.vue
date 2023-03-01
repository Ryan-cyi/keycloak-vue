<template>

  <button @click="logout">
    Logout
  </button>
  <div>{{Date.now()}}</div>

  <span>{{token}}</span>
</template>


<script lang="ts" setup>

import {getCurrentInstance} from "vue";
import Keycloak from "keycloak-js";

const $keycloak: Keycloak = getCurrentInstance()!.appContext.config.globalProperties.$keycloak
const token = $keycloak.token

const logout = () => {
  $keycloak.logout({redirectUri: 'http://localhost:3000/logout'})
}
</script>
