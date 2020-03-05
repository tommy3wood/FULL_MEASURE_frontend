<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1 class="subtitle">Signup</h1>

        <div>
          <p>Welcome to the allegiance against sidewalk poops.</p>
        </div>

        <ul>
          <li v-for="error in errors">{{error}}</li>
        </ul>

        <table align="center">
          <tr>
            <td id="col-1"><label>Name:</label></td>
            <td id="col-2"><input type="text" class="textarea" v-model="name"></td>
          </tr>

          <tr>
            <td id="col-1"><label>Zip Code:</label></td>
            <td id="col-2"><input type="text" class="textarea" v-model="zipCode"></td>
          </tr>

          <tr>
            <td id="col-1"><label>Email:</label></td>
            <td id="col-2"><input type="text" class="textarea" v-model="email"></td>
          </tr>

          <tr>
            <td id="col-1"><label>Password:</label></td>
            <td id="col-2"><input type="password" class="textarea" v-model="password"></td>
          </tr>

          <tr>
            <td id="col-1"><label>Password Confirmation:</label></td>
            <td id="col-2"><input type="password" class="textarea" v-model="passwordConfirmation"></td>
          </tr>

          <tr>
            <td id="col-1"></td>
            <td id="col-2"><input type="submit" class="btn btn-success" value="Signup"></td>
          </tr>


        </table>

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