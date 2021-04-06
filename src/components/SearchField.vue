<template>
  <div>
    <v-col class="mt-8 mx-auto" md="6" sm="10">
      <form @submit.prevent="searchSubmit">
        <v-text-field
          solo
          placeholder="Type name of package and hit Enter"
          v-model="textSearch"
        ></v-text-field>
      </form>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textSearch: "",
    };
  },
  methods: {
    searchSubmit() {
      this.$emit("onInputSubmit", this.textSearch);
      this.textSearch = "";
    },
  },
};
</script>
