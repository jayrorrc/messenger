<template>
  <div v-if="$store.getters.getActiveUserID" class="column">
    <MessageList />
    <MessageRegister />
  </div>
  <div v-else class="column">
    <h1>Click on an user</h1>
  </div>
</template>
<script>
import MessageList from "./message/MessageList";
import MessageRegister from "./message/MessageRegister";

export default {
  name: "Conversation",
  components: {
    MessageList,
    MessageRegister
  },
  created() {}
};
</script>
<style scoped>
</style>