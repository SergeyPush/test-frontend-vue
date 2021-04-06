<template>
  <v-dialog
    v-model="dialog"
    max-width="360"
    persistent
    click:outside="closeDialog"
    v-if="selectedPackage"
  >
    <v-card>
      <v-card-title class="headline">
        {{ selectedPackage.name }}
      </v-card-title>

      <v-card-text>
        <p>
          <span class="subtitle-2"> Description: </span
          >{{ selectedPackage.description }}
        </p>
        <p>
          <span class="subtitle-2"> Version:</span>
          {{ selectedPackage.version }}
        </p>
        <p v-if="selectedPackage && selectedPackage.author">
          <span class="subtitle-2"> Author:</span>
          {{ selectedPackage.author.name }}
        </p>

        <p>
          <span class="subtitle-2">Publisher:</span>
          {{ selectedPackage.publisher.email }}
        </p>
        <p>
          <span class="subtitle-2">Repository: </span
          ><a :href="selectedPackage.links.repository" target="blank"
            >Repository link</a
          >
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeDialog"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    selectedPackage: Object,
  },
  methods: {
    closeDialog() {
      this.$emit("setDialogClose");
    },
  },
};
</script>
