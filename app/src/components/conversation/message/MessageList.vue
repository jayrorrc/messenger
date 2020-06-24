<template>
  <div class="box">
    <div v-for="message in $store.getters.getMessages" :key="message.id" class="columns">
      <Message :message="message" />
    </div>
  </div>
</template>
<script>
import Message from "./Message";

export default {
  name: "MessageList",
  components: {
    Message
  }
};
</script>
<style scoped>
.box {
  height: 80%;
  overflow: scroll;
}
</style>