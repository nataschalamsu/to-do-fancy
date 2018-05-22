<template>
  <div class="home">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Brand -->
      <router-link class="navbar-brand" to="/">TO DO SOMETHING FANCY</router-link>

      <!-- Links -->
      <div class="collapse navbar-collapse justify-content-end" id="nav-content">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="navbarModal" data-toggle="modal" aria-haspopup="true" aria-expanded="false" data-target="#regisModal">
              Register
            </a>
            <!-- The Modal -->
          <div class="modal" id="regisModal">
              <div class="modal-dialog">
                <div class="modal-content">
            
                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">Register</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
            
                  <!-- Modal body -->
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" v-model="name">
                      </div>
                      <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" v-model="email">
                      </div>
                      <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" v-model="password">
                      </div>
                      <button type="submit" class="btn btn-success" @click="register">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <HelloWorld message="Welcome"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    register() {
      console
      axios
        .post('http://localhost:3000/users/signup', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          alert('Register Success')
          this.$router.push('/todo')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>

