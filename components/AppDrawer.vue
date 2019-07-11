<template>
    <v-navigation-drawer
        class="deep-purple accent-4"
        dark  
        app
        v-model="drawer"    
    >
        <v-app-bar
            dark
            color="teal"
        >
            
            <v-toolbar-title class="title">
                Dashboard
            </v-toolbar-title>
        </v-app-bar>
        <v-list>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
            <v-btn block>Logout</v-btn>
            </div>
        </template>
        </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'Dashboard', icon: 'dashboard' },
                { title: 'Account', icon: 'account_box' },
                { title: 'Admin', icon: 'gavel' },
            ],
        }
    },
    computed: {
        drawer: {
            get() {
                return this.$store.state.dashboard.drawer;
            }
        }
    },
}
</script>

<style>

</style>
