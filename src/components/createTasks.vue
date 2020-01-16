<template>
  <div class="container">
    <form class="form d-flex flex-column" v-on:submit="makeTask()">
      <h1>Постановка новой задачи</h1>
      <div class="form-group">
        <label for="exampleFormControlInput1">Заголовок</label>
        <input
          required
          minlength="6"
          v-model="newTask.header"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Заголовок новой задачи"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Описание</label>
        <textarea
          class="form-control"
          minlength="15"
          maxlength="2048"
          placeholder="Описание новой задачи..."
          id="exampleFormControlTextarea1"
          v-model="newTask.description"
          rows="3"
        ></textarea>
      </div>
      <div class="countWord align-self-end">осталось {{leftSimbols}} символов</div>
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
          <a @click="addTag()" class="btn btn-outline-dark m-0"> {{ tag }}</a>
        </div>
        <div class="col-2" v-for="(item, index) in newTask.tags" :key="index">
          <div class="btn btn-dark m-0"> {{ item }}</div>
        </div>
        <div class="col text-danger">{{ error }}</div>
      </div>


      <input v-model="newTask.deadLine" type="datetime-local" />

      <button class="btn btn-primary">Установить задачу</button>
    </form>
  </div>
</template>
<script>
export default {
 
  data() {
    return {
      newTask: {
        header: "",
        description: "",
        tags: [],
        deadline:''
      },
      tag: "test",
      error:''
    };
  },
  computed: {
    leftSimbols() {
      return 2048 - this.newTask.description.length;
    }
  },
  methods: {
    makeTask() {
      this.$store.dispatch('newTask',this.newTask)
      this.$router.push("/");
    },
    addTag() {
      let isSameTag = this.newTask.tags.find(tag=>{
        return this.tag === tag
      })
      if (!isSameTag) {
        this.newTask.tags.unshift(this.tag);
        this.tag = "test";
        this.error = ''
      }
      else {
        this.error  = "Такой Тэг уже существует"
      }
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
</style>