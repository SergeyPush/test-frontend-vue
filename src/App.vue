<template>
  <v-app>
    <v-main>
      <SearchField @onInputSubmit="seachPackage" />
      <Progress v-if="loading" />
      <p v-if="total === 0" class="text-center">No packages found</p>
      <div v-if="packages.length">
        <TableResults :packages="packages" @selectPackage="selectPackage" />
      </div>
      <Dialog
        :dialog="dialog"
        @setDialogClose="setDialogClose"
        :selectedPackage="selectedPackage"
      />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import SearchField from "./components/SearchField";
import TableResults from "./components/TableResults";
import Dialog from "./components/Dialog";
import Footer from "./components/Footer";
import Progress from "./components/Progress";
import { searchTerm } from "./utils/apiSearch";

export default {
  name: "App",

  components: {
    SearchField,
    TableResults,
    Footer,
    Dialog,
    Progress,
  },

  data: () => ({
    packages: [],
    selectedPackage: null,
    dialog: false,
    loading: false,
    total: null,
  }),
  methods: {
    async seachPackage(value) {
      this.loading = true;
      const { data, total } = await searchTerm(value);
      this.packages = data;
      this.total = total;
      this.loading = false;
    },
    selectPackage(value) {
      this.selectedPackage = value;
      this.dialog = true;
    },
    setDialogClose() {
      this.dialog = false;
      this.selectedPackage = null;
    },
  },
};
</script>
