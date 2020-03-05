<template>
  <div class="markers-new">
    <div class="container">
      <form v-on:submit.prevent="createMarker()">
        <h1 class="subtitle">Report Poop</h1>

        <div>
          <p>Please provide details of the evidence encountered.</p>
        </div>

        <div>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </div>

        <table align="center">
        <tr>
          <td id="col-1"><label>Address:</label></td>
          <td id="col-2"><input type="text" class="textarea" v-model="address"></td>
        </tr>

        <tr id="row-small">
          <td id="col-1"></td>
          <td id="col-2">ex. 215 W Ohio St., Chicago, IL</td>
        </tr>

        <tr>
          <td id="col-1"><label>Zip Code:</label></td>
          <td id="col-2"><input type="text" class="textarea" v-model="zipCode"></td>
        </tr>

        <tr id="row-small">
          <td id="col-1"></td>
          <td id="col-2">ex. 60654</td>
        </tr>

        <tr>
          <td id="col-1"><label>Description:</label></td>
          <td id="col-2"><input type="text" class="textarea-desc" v-model="description"></td>
        </tr>

        <tr id="row-small">
          <td id="col-1"></td>
          <td id="col-2">Make it detailed but don't be gross about it</td>
        </tr>

        <tr>
          <td id="col-1"><label>Status:</label></td>
          <td id="col-2"><input type="text" class="textarea" v-model="status"></td>
        </tr>

        <tr id="row-small">
          <td id="col-1"></td>
          <td id="col-2">ex. Solid</td>
        </tr>

        <tr>
          <td id="col-1"><label>Picture:</label></td>
          <td id="col-2"><input type="file" v-on:change="setFile($event)" ref="fileInput"></td>
        </tr>

        <tr id="row-small">
          <td id="col-1"></td>
          <td id="col-2">Optional</td>
        </tr>

        <tr>
          <td id="col-1"></td>
          <td id="col-2"><input type="submit" class="btn btn-primary" value="Create Poop"></td>
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
        address: "",
        zipCode: "",
        description: "",
        status: "",
        errors: [],
        image: ""
      };
    },
    created: function() {},
    methods: {
      setFile: function(event) {
        if (event.target.files.length > 0) {
          this.image = event.target.files[0];
        }
      },

      createMarker: function() {
        var formData = new FormData();
          formData.append("address", this.address);
          formData.append("zip_code", this.zipCode);
          formData.append("description", this.description);
          formData.append("status", this.status);
          formData.append("image", this.image);

        axios
        .post("/api/markers", formData)
        .then(response => {
          this.$router.push("/markers/table");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
      }
      
    }
};
</script>