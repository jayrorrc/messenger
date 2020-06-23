<template>
  <div class="column is-full">
    <span @click="activeConversation">{{user.username}}</span>
  </div>
</template>
<script>
export default {
  name: "User",
  props: ["user"],
  methods: {
    activeConversation() {
      this.$store.commit("activeUser", this.user._id);
    }
  }
};
</script>
<style scoped>
span {
  cursor: pointer;
}
</style>