<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <Match
          v-for="match in $store.state.users"
          :key="match.id"
          :id="match.id"
          :match="match"
        />
      </div>
    </div>
    <div v-if="$store.state.users.length > 0" class="col-md-12">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :totalVisible="8"
        @input="next"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Match from "../../components/Match";
import { AuthenticationService } from "../../services/authorizationService";
import { userService } from '../../services/userService';
export default {
  components: {
    Match,
  },
  data() {
    return {};
  },
  watch: {
    currentPage(newVal, oldVal) {
     this.$store.dispatch('getusers',{
            pageNumber: newVal,
            pageSize: 1,
            minAge: 18,
            maxAge: 90,
            gender: 'female',
            orderby: '',
            likers: false,
            likees: false,
        })
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.state.pagination.currentPage;
      },
      set(value) {
        this.$store.commit("SET_CURRENT_PAGE", value);
      },
    },
    totalPages: {
      get() {
        return this.$store.state.pagination.totalPages;
      },
    },
  },
  async created() {
    this.$store.dispatch('getusers',{
            pageNumber: 1,
            pageSize: 1,
            minAge: 18,
            maxAge: 90,
            gender: 'female',
            orderby: '',
            likers: false,
            likees: false,
        })
  },
  head() {
    return {
      title: "Welcome to CodeMate",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for hanging out with nerds :P",
        },
      ],
    };
  },
  methods: {
    next(page) {
      //use watch instead of this event, watch doesn't process if the same page is pressed again
      // console.log(page);
    },
  },
};
</script>
<style>
.primary {
  background-color: #212529 !important;
  border-color: #1867c0 !important;
}
</style>
