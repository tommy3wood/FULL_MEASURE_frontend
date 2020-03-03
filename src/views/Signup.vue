<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>signup</h1>

        <ul>
          <li v-for="error in errors">{{error}}</li>
        </ul>

        <div>
          <label>Name</label>
          <input type="name" v-model="name">
        </div>

        <div>
          <label>Zip Code</label>
          <input type="zipCode" v-model="zipCode">
        </div>

        <div>
          <label>Email</label>
          <input type="email" v-model="email">
        </div>

        <div>
          <label>Password</label>
          <input type="password" v-model="password">
        </div>

        <div>
          <label>Password Confirmation</label>
          <input type="password" v-model="passwordConfirmation">
        </div>

        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
  
export default {
  data: function() {
    return {
      name: "",
      zipCode: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods:{
    submit: function() {
      var params = {
        name: this.name,
        zip_code: this.zipCode,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
      .post("/api/users", params)
      .then(response => {
        this.$router.push("/login");
      })
      .catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>