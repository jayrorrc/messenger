<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
      </div>
      <div class="form-group">
        <input type="submit" value="Signup" />
        <router-link to="/" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Auth from "../../auth";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      submitted: false
    };
  },
  methods: {
    async handleSubmit(e) {
      this.submitted = true;
      const { username, password } = this;

      if (username && password) {
        let auth = await Auth.signup(username, password)
          .then(function(response) {
            let auth = {};
            auth.user = response.data.user;
            auth.token = response.data.token;

            return auth;
          })
          .catch(function(error) {
            console.error(error);

            return {};
          });
        this.$store.commit("setAuth", auth);
        this.$router.push("/");
      }
    }
  }
};
</script>