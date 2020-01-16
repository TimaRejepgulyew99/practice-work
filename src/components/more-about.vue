<template>
  <div class="container">
    <div class="more-about" v-if="!changeTaskBlock">
      <div class="row">
        <div class="col border-bottom mb-2 bt-2 p-3">Заголовок задачи</div>
        <div class="col border-bottom mb-2 bt-2 p-3">{{ thatTask.header }}</div>
      </div>
      <div class="row">
        <div class="col border-bottom mb-2 bt-2 p-3">Описания Задачи</div>
        <div class="col border-bottom mb-2 bt-2 p-3">{{ thatTask.description }}</div>
      </div>
      <div class="row">
        <div class="col border-bottom mb-2 bt-2 p-3">Тэги задачи</div>
        <div class="col border-bottom mb-2 bt-2 p-3">
          <template v-for="tag in thatTask.tags">{{ tag }},</template>
        </div>
      </div>
      <div class="row">
        <div class="col border-bottom mb-2 bt-2 p-3">По какое число</div>
        <div class="col border-bottom mb-2 bt-2 p-3">{{ thatTask.deadLine }}</div>
      </div>
      <div v-if="thatTask.status != 'complete'" class="row d-flex justify-content-end">
        <div class="col-3" >
          <router-link to="/my-tasks">
            <button  class="btn btn-outline-dark" @click="completeTask()">Завершить задачу</button>
          </router-link>
        </div>
        <div class="col-3">
          <button class="btn btn-outline-primary" @click="changeTask()">Изменить задачу</button>
        </div>
      </div>
    </div>
    <form v-else class="form d-flex flex-column">
      <h2>{{ thatTask.header }}</h2>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Описание</label>
        <textarea
          v-model="thatTask.description"
          class="form-control"
          minlength="15"
          maxlength="2048"
          placeholder="Описание новой задачи..."
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="countWord align-self-end">
        осталось
        {{leftSimbols}}
        символов
      </div>
      <label class="mr-sm-2" for="inlineFormCustomSelect">выбрать Тэг задачи</label>
      <div class="d-flex align-content-center flex-wrap">
        <div class="col-2">
          <select v-model="tag" class="custom-select mr-sm-2 mb-5" id="inlineFormCustomSelect">
            <option value="test">Тест</option>
            <option value="mest">Мест</option>
            <option value="rest">Рест</option>
          </select>
        </div>
        <div class="col-2">
          <a @click="addTag()" class="btn btn-outline-dark m-0">{{ tag }}</a>
        </div>
        <div
          @dblclick="deleteTag(index)"
          class="col-2"
          v-for="(item, index) in thatTask.tags"
          :key="index"
        >
          <div class="btn btn-dark m-0">{{ item }}</div>
        </div>
        <div class="col text-danger">{{error}}</div>
      </div>
      <input type="datetime-local" v-model="thatTask.deadLine" />
      <button class="btn btn-primary" @click="remakeTask()">Изменить задачу</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.taskId,
      thatTask: this.$store.getters.moreAboutTask(this.$route.params.taskId),
      tag: "test",
      error: "",
      status: "в работе",
      changeTaskBlock: false
    };
  },
  computed: {
    leftSimbols() {
      return 2048 - this.thatTask.description.length;
    },
    changeTask() {
      return (this.changeTaskBlock = !this.changeTaskBlock);
    }
  },
  methods: {
    action() {
      this.$store.dispatch("remakeTask", this.thatTask);
    },
    remakeTask() {
      console.log("work");
      this.action();
      this.$router.push("/");
    },
    completeTask() {
      this.thatTask.status = "complete";
      this.action();
      this.$router.go(-1);
    },
    addTag() {
      let isSameTag = this.thatTask.tags.find(tag => {
        return this.tag === tag;
      });
      if (!isSameTag) {
        console.log(isSameTag);
        this.thatTask.tags.unshift(this.tag);
        this.tag = "test";
        this.error = "";
      } else {
        this.error = "Такой Тэг уже существует";
      }
    },
    deleteTag(ind) {
      console.log(ind);
      this.$delete(this.thatTask.tags, ind);
    }
  }
};
</script>
<style  >
img {
  display: block;
  width: auto;
  height: 20vw;
}
textarea {
  display: block;
}
.btn {
  margin: 2vw 0;
  padding: 1vw 2vw;
  display: block;
}
a {
  text-decoration: none;
}
</style>