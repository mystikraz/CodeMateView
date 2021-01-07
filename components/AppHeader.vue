<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">CodeMate</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav flex-grow-1">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/"
              >Home </nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/matches">Matches</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
        </ul>
        <LoginPartial loggedIn="true" />
      </div>
    </nav>
  </header>
</template>
<script>
import LoginPartial from "../components/LoginPartial";
export default {
  name: "AppHeader",
  components: {
    LoginPartial,
  },
};
</script>