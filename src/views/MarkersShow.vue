<template>
  <div class="markers-show">
    <div class="container">

      <ul>
        <li>Address: {{marker.address}}</li>
        <li>Description: {{marker.description}}</li>
        <li>Status: {{marker.status}}</li>
        <li><img :src="marker.image_url"></li>
      </ul>
     
  
      <div>
        <img v-bind:src="marker.map" v-bind:alt="marker.address">
      </div>

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
        status: "",
        map: "", 
        image: ""
      }
    };
  },
  created: function() {
    axios
      .get("/api/markers/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
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