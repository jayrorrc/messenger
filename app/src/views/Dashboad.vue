<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <UserList />
    </div>
    <Conversation />
  </div>
</template>
<script>
import UserList from "../components/user/UserList";
import Conversation from "../components/conversation/Conversation";

export default {
  name: "Dashboard",
  components: {
    UserList,
    Conversation
  }
};
</script>
<style scoped>
</style>