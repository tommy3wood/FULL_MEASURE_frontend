<template>
  <div class="markers-index">
    <div class="container">
      <div v-for="marker in markers">

        <div>User ID:
         <h2> {{marker.user_id}}</h2> 
        </div>

        <div>Address:
         <h2> {{marker.address}}</h2> 
        </div>

        <div>Zip Code: 
         <h2> {{marker.zip_code}}</h2> 
        </div>

        <div>Description:
         <h2> {{marker.description}}</h2> 
        </div>

        <div>Status:
         <h2> {{marker.status}}</h2> 
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  var axios = require("axios");
  
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
    methods: {}
  }
</script>
