<template>
  <div class="about bg">
    <!-- <Navbar/> -->
    <div class="">
    <h1>Todo</h1>
    <Todo/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/Todo.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'todo',
  components: {
    Todo,
    Navbar
  }
}
</script>

<style>

body { 
  /* The image used */
  /* background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg"); */
  background-color: cadetblue;
  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}                    

h1 {
  background-color: whitesmoke;
}
</style>
