<template>
  <div class="posts-edit">
    <div class="container">
      <form v-on:submit.prevent="updateMarker()">
        <h1>Edit Marker</h1>

        <ul>
          <li v-for="error in errors">{{error}}</li>
        </ul>

        <div>
          <label>Address</label>
          <input type="text" v-model="marker.address">
        </div>

        <div>
          <label>Zip Code</label>
          <input type="text" v-model="marker.zipCode">
        </div>

        <div>
          <label>Description</label>
          <input type="text" v-model="marker.description">
        </div>

        <div>
          <label>Status</label>
          <input type="text" v-model="marker.status">
        </div>

        <div>
          <input type="submit" class="btn btn-primary" value="Edit marker">
        </div>

      </form>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      marker: {
        address: "",
        zipCode: "",
        description: "",
        status: ""
      },
      errors: []
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
    updateMarker: function() {
      var clientParams = {
        address: this.marker.address,
        zip_code: this.marker.zipCode,
        description: this.marker.description,
        status: this.marker.status
      };
      axios
      .patch("/api/markers/" + this.$route.params.id, clientParams)
      .then(response => {
        this.$router.push("/markers/" + this.$route.params.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>