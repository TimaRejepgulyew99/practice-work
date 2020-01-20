function recordData(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    tasks = JSON.parse(localStorage.getItem('tasks'))
}
export default {
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks'))||[],
    },
    mutations: {
        newTask(state, payload) {
            payload.status = 'work'
            payload.id = Math.floor(Math.random() * 1000)
            state.tasks.push(payload)
            recordData(state.tasks)
        },
        remakeTask(state, payload) {
            state.tasks = state.tasks.map(task => {
                if (task.id == payload.id) {
                    return task = payload
                } else {
                    return task = task
                }
            })
            recordData(state.tasks)


        },


    },
    actions: {
        newTask({ commit }, payload) {
            commit('newTask', payload)
        },
         remakeTask({ commit }, payload) {
            commit('remakeTask', payload)
        },

    },
    getters: {
        tasks(state) {
         state.tasks.forEach(element => {
               if (element.status != "complete") {
                 if (new Date(element.deadLine) > new Date()) {
                   return element.status = "в работе";
                 } else {
                    return element.status = "Просроченно";
                 }
               }
            });
            return state.tasks
        },
        moreAboutTask: state => id => {
            return state.tasks.find(tasks => tasks.id == id);
        },

    }
}