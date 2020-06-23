<template>
  <div>
    <div v-for="user in $store.getters.getUsers" :key="user.id" class="columns">
      <User :user="user" />
    </div>
  </div>
</template>
<script>
import User from "./User";
import UserController from "../../controllers/user";

export default {
  name: "UserList",
  components: {
    User
  },
  created() {
    let userId = this.$store.getters.getCurrentUserID;
    let token = this.$store.getters.getToken;

    UserController.getUsers(token, userId).then(res => {
      this.$store.commit("setUsers", res.users);
    });
  }
};
</script>
<style scoped>
</style>