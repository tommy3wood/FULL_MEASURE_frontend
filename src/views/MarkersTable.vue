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
          <td>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="currentMarker = marker">
              {{marker.address}}
            </button>
          </td>
          <td>{{ marker.zip_code }}</td>
          <td>{{ marker.status }}</td>
          <!-- <td>{{ formatDate(marker.created_at) }}</td> -->
          <td>{{ (marker.created_at) }}</td>

        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{currentMarker.address}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li>Description: {{currentMarker.description}}</li>
              <li>Status: {{currentMarker.status}}</li>
              <li><img v-bind:src="currentMarker.image_url" v-bind:alt="currentMarker.address"></li>
            </ul>
            <div>
              <img v-bind:src="currentMarker.map" v-bind:alt="currentMarker.address">
            </div>
          </div>
          <div class="modal-footer">
            <router-link v-bind:to="'/markers/' + currentMarker.id + '/edit'" class="btn btn-primary">Update</router-link>
            <input v-on:click="destroyMarker()" class="btn btn-primary ml-3" type="submit" value="Delete">
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
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
      markers: [],
      currentMarker: {}
    };
  },
  created: function() {
    axios
      .get("/api/markers")
      .then(response => {
        this.markers = response.data;
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