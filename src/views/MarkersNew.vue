<template>
  <div class="markers-new">
    <div class="container">
      <form v-on:submit.prevent="createMarker()">
        <h1>Report Poop</h1>

        <table align="center">
        <tr>
          <td id="col-1"><label>Address:</label></td>
          <td id="col-2"><input type="text" v-model="address"></td>
        </tr>

        <tr>
          <td id="col-1"><label>Zip Code:</label></td>
          <td id="col-2"><input type="text" v-model="zipCode"></td>
        </tr>

        <tr>
          <td id="col-1"><label>Description:</label></td>
          <td id="col-2"><input type="text" v-model="description"></td>
        </tr>

        <tr>
          <td id="col-1"><label>Status:</label></td>
          <td id="col-2"><input type="text" v-model="status"></td>
        </tr>

        <tr>
          <td id="col-1"><label>Picture:</label></td>
          <td id="col-2"><input type="file" v-on:change="setFile($event)" ref="fileInput"></td>
        </tr>


        </table>
        

          <input type="submit" class="btn btn-primary" value="Create Marker">


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