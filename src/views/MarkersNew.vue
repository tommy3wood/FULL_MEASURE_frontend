<template>
  <div class="markers-new">
    <div class="container">
      <form v-on:submit.prevent="createMarker()">
        <h1>New Marker</h1>

        <div>
          <label>Address</label>
          <input type="text" v-model="address">
        </div>

        <div>
          <label>Zip Code</label>
          <input type="text" v-model="zipCode">
        </div>

        <div>
          <label>Description</label>
          <input type="text" v-model="description">
        </div>

        <div>
          <label>Status</label>
          <input type="text" v-model="status">
        </div>

        <div>
          <input type="submit" class="btn btn-primary" value="Create marker">
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
        address: "",
        zipCode: "",
        description: "",
        status: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      createMarker: function() {
        var clientParams = {
          address: this.address,
          zip_code: this.zipCode,
          description: this.description,
          status: this.status,
        };

        axios
        .post("/api/markers", clientParams)
        .then(response => {
          this.$router.push("/markers");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
      }
    }
};
</script>