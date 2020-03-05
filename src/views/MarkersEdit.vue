<template>
  <div class="posts-edit">
    <div class="container">
      <form v-on:submit.prevent="updateMarker()">
        <h1 class="subtitle">Edit Poop</h1>

        <div class="text-danger" v-for="error in errors">{{ error }}</div>


        <table align="center">
          <tr>
            <td id="col-1"><label>Address:</label></td>
            <td id="col-2"><input type="text" class="textarea" v-model="marker.address"></td>
          </tr>

          <tr>
            <td id="col-1"><label>Zip Code:</label></td>
            <td id="col-2"><input type="text" class="textarea" v-model="marker.zip_code"></td>
          </tr>

          <tr>
            <td id="col-1"><label>Description:</label></td>
            <td id="col-2"><input type="text" class="textarea-desc" v-model="marker.description"></td>
          </tr>

          <tr>
            <td id="col-1"><label>Status:</label></td>
            <td id="col-2"><input type="text" class="textarea" v-model="marker.status"></td>
          </tr>

          <tr>
            <td id="col-1"><label>Picture:</label></td>
            <td id="col-2"><input type="file" v-on:change="setFile($event)" ref="fileInput"></td>
          </tr>

          <tr>
            <td id="col-1"></td>
            <td id="col-2"><input type="submit" class="btn btn-primary" value="Edit Poop"></td>
          </tr>

        </table>

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
        status: "", 
        image: ""
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
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    updateMarker: function() {
      var formData = new FormData();
        formData.append("address", this.marker.address);
        formData.append("zip_code", this.marker.zipCode);
        formData.append("description", this.marker.description);
        formData.append("status", this.marker.status);
        formData.append("image", this.marker.image);

      axios
      .patch("/api/markers/" + this.$route.params.id, formData)
      .then(response => {
        this.$router.push("/markers/table");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>