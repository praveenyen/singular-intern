<template>
    <v-app-bar
        dark
        color="teal lighten-1"
        class="transparent"
        fixed
        app
        elevate-on-scroll
        >
        <!-- <v-app-bar-nav-icon @click.stop="changeDrawer()"></v-app-bar-nav-icon> -->
        <v-toolbar-title class="title hidden-sm-and-up">
            <v-btn  text to="/">SA</v-btn>
        </v-toolbar-title>
        <v-toolbar-title class="title hidden-sm-and-down">
            <v-btn large text to="/">Singularity Automation</v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn class="" text to="about">About</v-btn>
            <v-btn class="" text to="contact">Contact</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        changeDrawer() {
            this.$store.commit('dashboard/changeDrawer');
        }
    },
}
</script>

<style>

</style>
