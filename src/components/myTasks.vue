<template>
  <div class="container">
    <table class="table text-muted border-bottom border-gray">
      <tr>
        <td>
          <strong class="d-block border col-auto rounded pt-2 pb-2 m-3">#</strong>
        </td>
        <td>
          <p class="media-body m-4">
            <strong class="d-block align-content-center text-gray-dark">Заголовок</strong>
          </p>
        </td>
        <td>
          <p class="media-body m-4">
            <strong class="d-block align-content-center text-gray-dark">Описание</strong>
          </p>
        </td>
        <td>
          <p class="media-body m-4">
            <strong class="d-block align-content-center text-gray-dark">статус</strong>
          </p>
        </td>
        <td>
          <router-link class="btn btn-outline-success m-4" to="/create-tasks">
            <a class>Создать задачу</a>
          </router-link>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <label class="mr-sm-2" for="inlineFormCustomSelect">выбрать Тэг задачи</label>
          <select
            v-model="filterTag"
            class="custom-select mr-sm-2 mb-5"
            id="inlineFormCustomSelect"
          >
            <option value="null">все типы тегов</option>

            <option value="test">Тест</option>
            <option value="mest">Мест</option>
            <option value="rest">Рест</option>
          </select>
        </td>
      </tr>

      <tr v-for="(task, index) in filterTasks" :key="index">
        <td>
          <strong class="d-block border col-auto rounded pt-2 pb-2 m-3">{{ index+1}}</strong>
        </td>
        <td>
          <p class="media-body m-4">
            <strong class="d-block align-content-center text-gray-dark short-form">{{ task.header }}</strong>
          </p>
        </td>
        <td>
          <p class="media-body m-4">
            <strong
              class="d-block align-content-center text-gray-dark short-form"
            >{{ task.description }}</strong>
          </p>
        </td>
        <td>
          <p class="media-body m-4">
            <strong class="d-block align-content-center text-gray-dark">{{ task.status }}</strong>
          </p>
        </td>
        <td>
          <router-link :to="{name:'more-about',params:{taskId:task.id}}">
            <a class="btn btn-outline-success m-2">Подробнее</a>
          </router-link>
        </td>
      </tr>
      <slot></slot>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterTag: 'null',
      filterTasks:this.$store.getters.tasks,
      id: "",
      tasks: this.$store.getters.tasks,
      description: true
    };
  },
  watch: {
    filterTag: function(val) {
       
      if (val != 'null') {
        this.filterTasks = this.tasks.filter(task => {
          for (let tag in task.tags) {
            if (task.tags[tag] == val) {
              return task;
            }
          }
        });
      }
      else{
        this.filterTasks = this.tasks
      }
    }
  }
};
</script>
