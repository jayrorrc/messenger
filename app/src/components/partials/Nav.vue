<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Messenger</strong>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="$store.getters.isAuthorized" @click="logout" class="button is-dark">
              <strong>Log out</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  methods: {
    logout() {
      this.$store.commit("setAuth", {});
    }
  }
};
</script>
<style scoped>
</style>