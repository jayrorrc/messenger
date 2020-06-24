<template>
  <div>
    <div v-if="$store.getters.isAuthorized">
      <Dashboard />
    </div>
    <div v-else class="dashboard">
      <Login />
    </div>
  </div>
</template>
<script>
import Dashboard from "./Dashboad";
import Login from "./Auth/Login";

export default {
  name: "Home",
  components: {
    Dashboard,
    Login
  }
};
</script>
<style scoped>
</style>