<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">content</v-container>

    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-btn outline block class="primary">1</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block class="primary">2</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block class="primary">2</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block class="primary">2</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-space-between>
      <v-flex xs4 md3>
        <v-btn outline block class="success">1</v-btn>
      </v-flex>
      <v-flex xs4 md3>
        <v-btn outline block class="success">2</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>
