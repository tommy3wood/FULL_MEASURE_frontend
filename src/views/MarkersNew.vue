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
          <td id="col-2"><input type="file" ref="inputFile" @change=uploadFile()></td>
        </tr>
        </table>
        

          <input type="submit" class="btn btn-primary" value="Create marker">


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
        inputPicture: null
      };
    },
    created: function() {},
    methods: {
      uploadFile: function() {
        this.inputPicture = this.$refs.inputFile.files[0];
      },
      createItem: function() {
        const params = {
          'image': this.inputPicture
        }

        let formData = new FormData()

        Object.entries(params).forEach(
          ([key, value]) => formData.append(key, value)
          )

        axios.post('/item', formData)
      },
      createMarker: function() {
        var clientParams = {
          address: this.address,
          zip_code: this.zipCode,
          description: this.description,
          status: this.status, 
          inputPicture: this.inputPicture
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