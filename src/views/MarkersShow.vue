<template>
  <div class="markers-show">
    <div class="container">
      <h1>{{marker.userId}}</h1>
      <h1>{{marker.address}}</h1>
      <h1>{{marker.zipCode}}</h1>
      <h1>{{marker.description}}</h1>
      <h1>{{marker.status}}</h1>

      <router-link v-bind:to="'/markers/' + marker.id + '/edit'" class="btn btn-primary">Update</router-link>
      <input v-on:click="destroyMarker()" class="btn btn-primary ml-3" type="submit" value="Delete">
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      marker: {
        userId: "",
        address: "",
        zipCode: "",
        description: "",
        status: ""
      }
    };
  },
  created: function() {
    axios
      .get("/api/markers/" + this.$route.params.id)
      .then(response => {
        this.marker = response.data;
      });
  },
  methods: {
    destroyMarker: function() {
      axios
        .delete("api/markers/" + this.$route.params.id)
        .then(response => {
          this.$router.push("/")
        });
    }
  }
};
</script>