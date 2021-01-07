<template>
  <div>
    <div class="app flex-row align-items-center">
      <div class="container mt-5">
        <div class="justify-content-center row">
          <div class="col-md-6">
            <div class="card-group">
              <div class="p-4 card">
                <div class="card-body">
                  <form class="" v-on:submit="onSubmit">
                    <h1>Login</h1>
                    <p class="text-muted">Sign In to your account</p>
                    <div class="mb-3 input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="icon-user"></i
                        ></span>
                      </div>
                      <input
                        name="Email"
                        placeholder="Username"
                        autocomplete="username"
                        type="text"
                        class="form-control"
                        v-model="form.email"
                      />
                    </div>
                    <div class="mb-4 input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="icon-lock"></i
                        ></span>
                      </div>
                      <input
                        name="Password"
                        placeholder="Password"
                        autocomplete="current-password"
                        type="password"
                        class="form-control"
                        v-model="form.password"
                      />
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <button type="submit" class="px-4 btn btn-primary">
                          Login
                        </button>
                      </div>
                      <div class="text-right col-6">
                        <a color="link" class="px-0" href="/forgetPassword"
                          >Forgot password?</a
                        >
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit(e) {
      console.log("submitted...");
      e.preventDefault();
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      try {
        const result = await this.$axios.post("/v1/login", this.form, config);
        if (result.status === 200 && result.data) {
          localStorage.setItem("currentUser", JSON.stringify(result.data.data));
          this.$store.commit("SET_LOGGEDIN", true);
          this.$store.commit("SET_USERNAME", result.data.data.user.userName);
          console.log(this.$store.state.userObj);

          this.$router.push("/matches");
        } else {
          console.log(result);
          console.log(result.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>