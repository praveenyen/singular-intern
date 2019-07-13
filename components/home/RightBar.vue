<template>
  <div>
    <v-container>
      <v-layout column justify-center align-center>
        <p class="ma-0 grey--text">Local date</p>
        <h3 class="teal--text mt-1">{{ todayDate }}</h3>
      </v-layout>
      <br>
      <v-layout column justify-center align-center>
        <p class="ma-0 grey--text">Local time</p>
        <h3 class="teal--text mt-1">{{ currentTime }}</h3>
      </v-layout>
      <br>
      <v-layout column justify-center align-center>
        <p class="ma-0 grey--text">Local Timezone</p>
        <p class="teal--text mt-1">{{ new Date().toTimeString() }}</p>
      </v-layout>
      <v-layout column justify-center align-center class="">
        <v-flex xs12 sm6>
          <v-hover v-slot:default="{hover}">
            <v-card :elevation="hover ? 12 : 2" max-width="350" min-width="220" class="mt-0 mb-2 fa-0">
              <v-card-text>
                <v-layout justify-center align-center>
                  <p class="ma-0">Convert local YYYY / MM / DD</p>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field name="name" label="Year" v-model="year"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field name="name" label="Month" v-model="month"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field name="name" label="Date" v-model="date"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
      <v-layout column justify-center align-center>
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2" max-width="350" min-width="220">
            <v-card-text>
              <v-layout justify-center align-center>
                <p class="ma-0">and HH : MM : SS</p>
              </v-layout>
              <v-layout row>
                <v-flex>
                  <v-text-field name="name" label="Hours" v-model="hour"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field name="name" label="Minutes" v-model="minute"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field name="name" label="Seconds" v-model="second"></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-layout>
      <v-layout column justify-center align-center class="mt-2">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2" max-width="350" min-width="220">
            <v-card-text>
              <v-layout column justify-center align-center>
                <p class="ma-0">To UTC Time & Date</p>
                <div v-if="year != ''">
                  <p class="ma-0 mt-2">{{ Math.trunc((new Date(`${month}/${date}/${year} ${hour}:${minute}:${second}`).getTime())/1000)}}</p>
                </div>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todayDate: '',
        currentTime: '',
        unixTime: '',
        year: '',
        month: '',
        date: '',
        hour: '',
        minute: '',
        second: '',
      }
    },
    mounted() {
      this.todayDate = this.getTodayDate();
      setInterval(() => {
        this.currentTime = this.getTime();
      }, 300);
    },
    methods: {
      getTodayDate() {
        var date = new Date();
        var todayDate = date.toDateString();
        return todayDate;
      },
      getTime() {
        var todayTime = new Date();
        var h = todayTime.getHours();
        var m = todayTime.getMinutes();
        var s = todayTime.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        return h + ' : ' + m + ' : ' + s;
      },
      checkTime(i) {
        if (i < 10) {
          i = "0" + i
        };
        return i;
      }
    },
  }

</script>

<style>

</style>
