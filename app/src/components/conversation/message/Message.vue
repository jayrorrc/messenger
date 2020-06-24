<template>
  <div class="column is-full">
    <span class="from">{{message.from}}:</span>
    <span class="from">{{message.text}}</span>
    <span class="datetime">{{message.createdAt}}</span>
  </div>
</template>
<script>
export default {
  name: "Message",
  props: ["message"]
};
</script>
<style scoped>
</style>