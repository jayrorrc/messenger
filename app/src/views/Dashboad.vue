<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <UserList />
    </div>
    <div class="column">
      <h1>Conversation</h1>
    </div>
  </div>
</template>
<script>
import UserList from "../components/user/UserList";

export default {
  name: "Dashboard",
  components: {
    UserList
  }
};
</script>
<style scoped>
</style>