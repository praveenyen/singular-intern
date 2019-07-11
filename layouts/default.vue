<template>
  <div >
    <template>    
        <AppToolbar/>
        <!-- <AppDrawer/> -->
        <v-content>
          <v-layout row wrap>
            <v-flex md3 xs12>
              <LeftBar/>
            </v-flex>
            <v-flex md6 xs12>
              <div >
                <nuxt/>
              </div>
            </v-flex>
            <v-flex md3 xs12>
              <RightBar/>
            </v-flex>
          </v-layout>
        </v-content>
    </template>
  </div>
</template>

<script>
import AppDrawer from '@/components/AppDrawer.vue';
import AppToolbar from '@/components/AppToolbar.vue';
import LeftBar from '@/components/home/LeftBar.vue';
import RightBar from '@/components/home/RightBar.vue';
export default {
  components: {
    AppDrawer,
    AppToolbar,
    LeftBar,
    RightBar
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
