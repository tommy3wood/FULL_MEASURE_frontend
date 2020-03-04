<template>
  <div class="markers-index">
    <div class="container">
      <div v-for="marker in markers">

        <div>Address:
         <h2> {{marker.address}}</h2> 

       
         <!-- Button trigger modal -->
         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="currentMarker = marker">
           View details
         </button>


        </div>
      </div>
    </div>

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
           </ul>
           <div>
             <img v-bind:src="currentMarker.map" v-bind:alt="currentMarker.address">
           </div>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
           <button type="button" class="btn btn-primary">Save changes</button>
         </div>
       </div>
     </div>
   </div>
   <!-- end modal -->
  </div>
</template>

<script>
  var axios = require("axios");
  
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
    methods: {}
  }
</script>
