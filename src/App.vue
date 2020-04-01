<template>
  <v-app style="width:500px;margin: 25px 25px 25px 25px">
    <v-form ref="form" v-model="valid" lazy-validation v-on:submit.prevent="validate(member)"> 
      <v-text-field
        v-model="member.name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="member.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="member.select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="member.checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" type="submit"  >
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>

      <v-btn color="warning" @click="resetValidation">
        Reset Validation
      </v-btn>
    </v-form>
    <ul v-for="mem in memberList" v-bind:key="mem.name">
       <li>{{mem.name}}</li>
    </ul>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    memberList: [],
    valid: true,
    member: { name:'', email:'', select:'', checkbox: false},
    //name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    //email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate(member) {
     if (this.$refs.form.validate()) {
      this.memberList.push(member)
      console.log(this.memberList)
      this.member = { name:'', email:'', select:'', checkbox: false }
      this.$refs.form.reset()
      this.$refs.form.resetValidation();
      //this.$refs.form.res
     }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
