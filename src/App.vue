<template>
    <v-app>
        <v-toolbar
			dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
			style="height: 64px"
        >
            <v-toolbar-title>YouTube Curation</v-toolbar-title>
        </v-toolbar>
        <top />
        <v-toolbar
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-spacer />
            <p>@Yukihiro</p>
        </v-toolbar>
    </v-app>
</template>

<script>
import Top from './components/Top.vue'

export default {
  name: 'App',
  components: {
    Top,
  }
}
</script>
