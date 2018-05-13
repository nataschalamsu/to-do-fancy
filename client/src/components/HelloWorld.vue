<template>
  <div class="hello">
    <form>
      <div class="form-group w-25 p-3">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        <button type="submit" class="btn btn-primary" @click="login">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return{
      email: '',
      password: ''
    }
  },
  props: {
    message: String
  },
  methods: {
    login() {
      axios
        .post('http://localhost:3000/users/signin', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          localStorage.setItem("token", response.data.token)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
