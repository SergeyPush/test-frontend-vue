<template>
  <v-col class="mx-auto" md="6" sm="10">
    <v-data-table
      :headers="headers"
      :items="packages"
      @click:row="handleItemClick"
    ></v-data-table>
  </v-col>
</template>

<script>
export default {
  props: {
    packages: Array,
  },
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Version", value: "version" },
      ],
    };
  },
  methods: {
    handleItemClick(value) {
      this.$emit("selectPackage", value);
    },
  },
};
</script>
