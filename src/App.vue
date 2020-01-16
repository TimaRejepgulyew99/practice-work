<template>
  <div class="container" id="app">
    <div class="d-flex flex-md-row align-items-center p-3 mb-3 bg-white shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">Turkmen tranzit</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">
          <router-link to="/">мои задачи</router-link>
        </a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>

    <router-view 
    >
      
    </router-view>
  </div>
</template>

<script>
export default {
  name: "app",
   created(){
 
   
    
   
  },
  // beforeMount() {
  //   let self = this;
  //   if (!JSON.parse(localStorage.getItem("tasks"))) {
  //     localStorage.setItem("tasks", JSON.stringify(self.tasks));
  //   }
  //   this.tasks = JSON.parse(localStorage.getItem("tasks"));
  //   this.tasks.filter(el => {
  //     if (!el.isComplete) {
  //       const now = new Date();
  //       if (new Date(el.deadLine) > now) {
  //         let endTime = new Date(el.deadLine) - now;
  //         setTimeout(function() {
  //           el.isDeadLine = "Просроченно";
  //         }, endTime);
  //       } else {
  //         el.isDeadLine = "Просроченно";
  //       }
  //     } else {
  //       el.isDeadLine = "Завершен";
  //     }
  //   });
  // },
  data() {
    return {
      // tag: "all",
      // tasks: [],
      // thatTask: 0,
      // thatTaskIndex: 0,
      // filterTask:[]
    };
  },
  // watch: {
  //   tag: function filter(val, oldVal) {
  //     if (val === "all") {
  //       this.filterTask = this.tasks
  //     } else {
  //       this.filterTask = this.tasks.filter(task => {
  //         for(let tag in task.tags){
  //           // console.log(task.tags);
  //           if(task.tags.tag === val)
            
  //             return task
  //         }
          
          
  //       });
  //       console.log(this.filterTask);
  //     }
  //   }
  // },
  // methods: {
  //   isDeadLine(task) {
  //     if (!task.isComplete) {
  //       let now = new Date();
  //       let deadline = new Date(task.deadLine);
  //       if (deadline > now) {
  //         let endTime = deadline - now;
  //         setTimeout(() => {
  //           task.isDeadLine = "Просроченно";
  //         }, endTime);
  //         task.isDeadLine = "В работе";
  //       } else {
  //         task.isDeadLine = "Просроченно";
  //       }
  //     } else {
  //       task.isDeadLine = "Завершен";
  //     }
  //   },
  //   makeNewTask(task) {
  //     this.tasks.push(task);
  //     this.isDeadLine(this.tasks[this.tasks.length - 1]);
  //     localStorage.setItem("tasks", JSON.stringify(this.tasks));
  //   },
  //   remakeTask(task) {
  //     this.$set(this.tasks, this.thatTaskIndex, task);
  //     this.isDeadLine(this.tasks[this.thatTaskIndex]);
  //     localStorage.setItem("tasks", JSON.stringify(this.tasks));
  //   },
  //   selectTask(ind) {
  //     if (this.tasks.length >= 1) {
  //       this.thatTask = this.tasks[ind];
  //       this.thatTaskIndex = ind;
  //     }
  //   }
  // }
};
</script>

<style>
a {
  color: black;
  text-decoration: none;
}
.short-form {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 10vw;
  white-space: nowrap;
}
</style>
