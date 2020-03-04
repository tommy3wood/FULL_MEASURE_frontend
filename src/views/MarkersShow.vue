<template>
  <div class="markers-show">
    <div class="container">
      <h1><b>Poop ID:</b> {{marker.id}}</h1>
      <h1><b>Address:</b> {{marker.address}}</h1>
      <h1><b>Zip Code:</b> {{marker.zip_code}}</h1>
      <h3><b>Description:</b> {{marker.description}}</h3>
      <h3><b>Status:</b> {{marker.status}}</h3>

      <router-link v-bind:to="'/markers/' + marker.id + '/edit'" class="btn btn-primary">Update</router-link>
      <input v-on:click="destroyMarker()" class="btn btn-danger ml-3" type="submit" value="Delete">
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