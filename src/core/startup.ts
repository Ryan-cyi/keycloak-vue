import {Router} from "vue-router";
import Keycloak from "keycloak-js";

const initRouterGuard = (router: Router, keycloak: Keycloak) => {
    router.beforeEach(async (to, from,next) => {
        const {meta} = to
        if(meta.ignoreAuth){
            next()
        }else{
            // 判断登录
            if(keycloak.authenticated){
                next();
            }else{
               const destination = to.path
                if(!destination.includes('callback')){
                    localStorage.setItem('__destination__', destination)
                }
               await keycloak.login({ redirectUri: 'http://localhost:3000/callback' })
            }
        }
    })
}


export {
    initRouterGuard
}
