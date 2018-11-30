<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-card flat class="pa-3">
        <v-layout row wrap>
          <v-flex x12 md6>
            <div class="cation grey--text">Project Title</div>
            <div>Create a new project</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="cation grey--text">Person</div>
            <div>The Net Ninja</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="cation grey--text">Due by</div>
            <div>1st January 2019</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="cation grey--text">Status</div>
            <div>Complete</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
