<template>
  <div class="markers-table">
    <h1 class="text-center mb-5">Markers</h1>

    <table class="table table-striped table-dark">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Address</th>
          <th scope="col">Zip Code</th>
          <th scope="col">Status</th>
          <th scope="col">Created On</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="marker in markers">
          <th scope="row">{{ marker.id }}</th>
          <td><router-link v-bind:to="'/markers/' + marker.id">{{ marker.address }}</router-link></td>
          <td>{{ marker.zip_code }}</td>
          <td>{{ marker.status }}</td>
          <!-- <td>{{ formatDate(marker.created_at) }}</td> -->
          <td>{{ (marker.created_at) }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");
// import moment from "moment";
export default {
  data: function() {
    return {
      markers: []
    };
  },
  created: function() {
    axios
      .get("/api/markers")
      .then(response => {
        this.markers = response.data;
      });
  },
  // methods: {
  //   relativeDate: function(date) {
  //     return moment(date).fromNow();
  //   },
  //   formatDate: function(date) {
  //     return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  //   }
  // }
};
</script>