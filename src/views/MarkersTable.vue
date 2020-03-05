<template>
  <div class="markers-table">
    <h1 class="title">FULL MEASURE</h1>
    <h2>Take your neighborhood back</h2><br />
    <h1 class="subtitle">Poop Report</h1>
      <div>
        <h6>Select from the following items for more details on reported encounters.</h6>
      </div>


    <table class="table table-striped table-light" id="table-size">
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
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" @click="currentMarker = marker">
              {{marker.address}}
            </button>
          </td>
          <td>{{ marker.zip_code }}</td>
          <td>{{ marker.status }}</td>
          <!-- <td>{{ formatDate(marker.created_at) }}</td> -->
          <td>{{ relativeDate(marker.created_at) }}</td>

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
            <div>
              <img v-bind:src="currentMarker.map" v-bind:alt="currentMarker.address">
            </div>
            <div><h5>Description</h5></div>
            <div>{{currentMarker.description}}</div>
            <br>
            <div><h5>Status</h5></div>
            <div>{{currentMarker.status}}</div>
            <div><img v-bind:src="currentMarker.image_url" v-bind:alt="currentMarker.address" width=250px></div>
            
          </div>
          <div class="modal-footer">
            <router-link v-bind:to="'/markers/' + currentMarker.id + '/edit'" data-dismiss="modal" class="btn btn-primary">Update</router-link>
            <input v-on:click="destroyMarker()" data-dismiss="modal" class="btn btn-danger ml-3" type="submit" value="Delete">
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
import moment from "moment";

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
        .delete("api/markers/" + this.currentMarker.id)
        .then(response => {
          this.$router.push("/markers/new")
      });
    },
    relativeDate: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
};
</script>