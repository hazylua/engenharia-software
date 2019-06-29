export default {
    namespaced: true,
    state: {
        auth: {}
    },
    getters:{
        user_auth:  state => state.user.auth
    },
    mutations: {
        user_auth: function(state, payload) {

        }
    },
    actions: {
        user_auth: function(state){

        }
    }
}