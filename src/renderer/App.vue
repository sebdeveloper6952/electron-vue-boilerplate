<template>
  <v-app>
      <v-toolbar app color="primary">
          <v-icon>fa-bars</v-icon>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
          <router-view></router-view>
      </v-content>
      <v-footer>
          <v-spacer></v-spacer>
          <span class="surface--text">
              Footer
          </span>
          <v-spacer></v-spacer>
      </v-footer>
  </v-app>
</template>
