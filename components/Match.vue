<template>
  <div class="col-lg-2 col-md-3 col-sm-6">
    <div class="card mb-4">
      <div class="card-img-wrapper">
        <img
          src="https://th.bing.com/th/id/OIP.bKbNxH3QF4Fl-wDDDC-GmwHaNK?pid=Api&rs=1"
          alt=""
          class="card-img-top"
        />
        <ul class="list-inline member-icons animate text-center">
          <li class="list-inline-item">
            <button class="btn btn-info"><v-icon>mdi-account</v-icon></button>
          </li>
          <li class="list-inline-item">
            <button class="btn btn-info"><v-icon>mdi-thumb-up</v-icon></button>
          </li>
          <li class="list-inline-item">
            <button class="btn btn-info">
             <v-icon>mdi-message-text-outline </v-icon>
            </button>
          </li>
        </ul>
      </div>
      <div class="card-body p-1">
        <h6 class="card-title text-center mb-1">
          <i class="fa fa-user"></i>

          {{ match.username }}
        </h6>
        <p class="card-text text-muted text-center">
          {{ match.age }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Match",
  props: ["match", "id"],
  components: {},
  fetch({redirect}) {
    if (!this.$store.state.loggedIn) {
      return redirect("/login");
      console.log("not authorized");
    }
  },
};
</script>
<style scoped>
.card:hover img {
  transform: scale(1.2, 1.2);
  transition-duration: 500ms;
  transition-timing-function: ease-out;
  opacity: 0.7;
}

.card img {
  transform: scale(1, 1);
  transition-duration: 500ms;
  transition-timing-function: ease-out;
}

.card-img-wrapper {
  overflow: hidden;
  position: relative;
}

.member-icons {
  position: absolute;
  bottom: -30%;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  opacity: 0;
}

.card-img-wrapper:hover .member-icons {
  bottom: 0;
  opacity: 1;
}

.animate {
  transition: all 0.3s ease-in-out;
}
.list-inline-item{
  margin-right: 0;
}
</style>