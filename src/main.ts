import {createApp, reactive} from 'vue'
import App from './App.vue'

import {router} from "./router";

import {initRouterGuard} from "./core/startup";

import Keycloak from "keycloak-js";

const initOptions ={
    url: 'http://localhost:9999',
    realm: 'application_01',
    clientId: "app-1"
}

const keycloak = new Keycloak(initOptions)
keycloak.onTokenExpired = () => {
    keycloak.logout({})
}
keycloak.init({
    checkLoginIframe: false,
    responseMode: 'query'
}).then(() => {
    const app = createApp(App)

    app.use(router)

    initRouterGuard(router, keycloak)

    app.config.globalProperties.$keycloak = reactive(keycloak)

    app.mount('#app')
})


