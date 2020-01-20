function recordData(isAuth) {
    localStorage.setItem("authUser", isAuth)
    isAuth = localStorage.getItem('authUser')

}

export default {
    state: {
        users: [
            {
                login: 'Admin',
                password: 12345,
                name: 'Timur',
                lastName: 'Rejepgulyew'
            }
        ],
        authUser: localStorage.getItem('authUser')|| false,
    },
    mutations: {
        logIn(state, payload) {
            state.users.forEach(element => {
                if (element.login == payload.login && element.password == payload.password) {
                    state.authUser = true
                    recordData(state.authUser)
                }
            });
        },
    },
    actions: {
        logIn({ commit }, payload) {
            commit('logIn', payload)
        },
    },
    getters: {
        getUser(state) {
            return state.users[0]
        },
        authUser(state) {
            return state.authUser
        }

    },

}
