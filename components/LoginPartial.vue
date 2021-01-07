<template>
  <ul v-if="$store.state.loggedIn" class="navbar-nav">
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/login">
        Hello {{ $store.state.userName }}
      </nuxt-link>
    </li>
    <li class="nav-item">
      <button
        type="button"
        v-on:click="logOut"
        class="nav-link btn btn-link"
      >
        Logout
      </button>
    </li>
  </ul>
  <ul v-else class="navbar-nav">
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/register">Register </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
    </li>
  </ul>
</template>

<script>
import { AuthenticationService } from "../services/authorizationService";
export default {
  name: "LoginPartial",
  data() {
    return {};
  },
  created() {
    if (process.browser) {
      const userObj = JSON.parse(localStorage.getItem("currentUser"));

      if (userObj !== null) {
        this.$store.commit("SET_LOGGEDIN", true);
        console.log(this.$store.state.userObj);
        this.$store.commit("SET_USERNAME", userObj.user.userName);
      }
    }
  },
  methods: {
    logOut() {
      AuthenticationService.logout();
      this.$store.commit("SET_LOGGEDIN", false);
      this.$store.commit("SET_USERNAME", null);
      this.$router.push("/login");
    },
  },
  computed: {
    getUserName: function () {
      return this.$store.state.userObj?.user?.firstName;
    },
  },
};
</script>