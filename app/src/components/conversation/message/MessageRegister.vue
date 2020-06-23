<template>
  <div>
    <form @submit.prevent="sendMessage">
      <div class="columns">
        <div class="form-group column">
          <textarea
            type="text"
            v-model="text"
            name="text"
            class="form-control"
            :class="{ 'is-invalid': submitted && !text }"
          />
        </div>
        <div class="form-group column is-one-fifth">
          <input type="submit" value="Send" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import MessageController from "../../../controllers/message";

export default {
  name: "MessageRegister",
  data() {
    return {
      text: "",
      submitted: false
    };
  },
  methods: {
    async sendMessage() {
      this.submitted = true;
      let data = {
        text: this.text,
        from: this.$store.getters.getCurrentUserID,
        to: this.$store.getters.getActiveUserID
      };

      let token = this.$store.getters.getToken;

      let conversations = await MessageController.sendMessage(token, data);

      console.log("conversations:", conversations);
    }
  }
};
</script>
<style scoped>
textarea {
  width: 100%;
}
</style>