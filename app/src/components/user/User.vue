<template>
  <div class="column is-full">
    <span @click="activeConversation">{{user.username}}</span>
  </div>
</template>
<script>
import MessageController from "../../controllers/message";
export default {
  name: "User",
  props: ["user"],
  methods: {
    activeConversation() {
      this.$store.commit("activeUser", this.user._id);

      let data = {
        from: this.$store.getters.getCurrentUserID,
        to: this.$store.getters.getActiveUserID
      };

      let token = this.$store.getters.getToken;

      MessageController.getMessage(token, data).then(res => {
        this.$store.commit("setMessages", res.messages);
      });
    }
  }
};
</script>
<style scoped>
span {
  cursor: pointer;
}
</style>