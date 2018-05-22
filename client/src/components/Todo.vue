<template>
  <div class="container">
    <div id="openweathermap-widget-13"></div>
    <div class="bg-dark p-3">
      <div class="p-2">
        <button type="button" class="btn btn-danger btn-md" @click="logout">
          Logout
        </button>
        <button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#taskModal">
          Add Task
        </button>
      </div>
      
        <!-- The Modal -->
        <div class="modal" id="taskModal">
          <div class="modal-dialog">
            <div class="modal-content">
        
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">New Task</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
        
              <!-- Modal body -->
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="name">Task: </label>
                    <input type="text" class="form-control" id="task" v-model="task">
                  </div>
                  <div class="form-group">
                    <label for="sel1">Select list:</label>
                    <select class="form-control" id="sel1" v-model="choosenTag">
                      <option v-for="(tag, i) in tagList" :key="{i}">{{ tag.tagName }}</option>
                    </select>
                  </div>
                </form>
              </div>
              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addNewTask">Save Task</button>
              </div>
            </div>
          </div>
        </div>
      <div class="justify-content-between row p-3">
        <div class="col-lg-3 col-md-4 mb-4 h-75 w-75 bg-info p-2 m-1" v-for="(todo, i) in todoList" :key="{i}">
          <p class="text-justify" id="inputTask">Task: {{ todo.task }}</p>
          <p class="text-justify" id="inputTag">Tag: {{ todo.tag.tagName }}</p>
          <button type="submit" class="btn btn-success" @click="deleteTask(todo)">Done</button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';

export default {
  name: "Todo",
  data() {
    return {
      task: '',
      tag: '',
      tags: null,
      todoList: [],
      tagList: [],
      choosenTag: ''
    }
  },
  methods: {
    addNewTask: function() {
      console.log("masuk===>", this.choosenTag)
      // let self = this
      // console.log(this.choosenTag)
      axios
        .post('http://localhost:3000/tags/one', {
          name: this.choosenTag
        })
        .then(tag => {
          console.log("masuk====", tag)
          let tagId = tag.data._id
          console.log(tagId)
          axios
            .post('http://localhost:3000/todos', {
              task: this.task,
              tag: tagId
            },{
              headers: {
                token: localStorage.getItem('token')
              }
            })
              .then(newTask => {
                alert('new task saved')
                this.$router.push('/todo')
                location.reload()
              })
              .catch(err => {
                console.log(err)
              })
        })
        .catch(err => {
          console.log(err);
        })
    },
    logout: function() {
      localStorage.removeItem('token')
      this.$router.push('/')
    },
    deleteTask: function(task) {
      console.log(task)
      axios
        .delete(`http://localhost:3000/todos/${task._id}`)
        .then(response => {
          alert('task deleted')
          this.$router.push('/todo')
          location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created() {
      axios
        .get('http://localhost:3000/todos/mytask', {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then((response) => {
          console.log(response)
          this.todoList = response.data
          console.log(this.todoList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  mounted() {
    axios
      .get('http://localhost:3000/tags')
      .then((response) => {
        console.log(response)
        this.tagList = response.data.tagData
      })
  },
  computed: {
    ...mapState([
      'userId'
    ])
  } 
}
</script>

<style>

p {
  background-color: white;
  color: black;
}

</style>

