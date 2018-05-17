<template>
  <div class="hello">
    <form>
      <div class="form-group w-25 p-3">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        <button type="submit" class="btn btn-primary" @click="login">Login</button>
        <button type="submit" class="btn btn-primary" @click="loginFb">Login Facebook</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return{
      email: '',
      password: ''
    }
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
          this.$router.push('/todo')
        })
        .catch(err => {
          console.log(err)
        })
    }, 
    loginFb() {
      window.FB.login((response) => {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
          console.log('masuk ke if di login fb');
          localStorage.setItem('fb_access_token', response.authResponse.accessToken);
          this.testAPI();
        } else {
          alert('login first');
        }
      });
    },
    testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      axios.get('http://localhost:3000/loginFb', {
        headers: { 
          fb_access_token: localStorage.getItem('fb_access_token') 
        },
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/todo');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  created: function () {
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));
      window.fbAsyncInit = function () {
      window.FB.init({
        appId: '174744619895276',
        cookie: true,
        xfbml: true,
        version: 'v2.8',
      });
    };
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
