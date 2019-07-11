<template>
    <div>
        <v-container>
            <v-layout column justify-center align-center>
                <p class="ma-0 grey--text">UTC date</p>
                <h3 class="teal--text mt-1">{{ new Date().toDateString() }}</h3>
            </v-layout>
            <br>
            <v-layout column justify-center align-center>
                <p class="ma-0 grey--text">UTC time</p>
                <h3 class="teal--text mt-1">{{ currentTime }}</h3>
            </v-layout>
            <br>
            <v-layout column justify-center align-center>
                <p class="ma-0 grey--text">UNIX time</p>
                <h3 class="teal--text mt-1">{{ new Date().valueOf() }}</h3>
            </v-layout>
            
            <v-layout column justify-center align-center class="mt-4">
                <v-flex xs12 sm6>
                    <v-text-field
                        v-model="date"
                        label="Convert Seconds"
                        outlined
                        shaped
                    ></v-text-field>
                </v-flex>
            </v-layout> 
            <v-layout column justify-center align-center>
               <v-hover v-slot:default="{hover}">
                    <v-card 
                        :elevation="hover ? 12 : 2"
                        max-width="350"
                        min-width="220"
                        >
                        <v-card-text>
                            <v-layout column justify-center align-center>
                                <p class="ma-0">To UTC Time & Date</p>
                                <p class="ma-0 mt-2 teal--text font-weight-bold">{{ new Date(`${date}`/1).toUTCString() }}</p>
                            </v-layout>
                        </v-card-text>
                    </v-card>
               </v-hover>
            </v-layout>
            <v-layout column justify-center align-center class="mt-2">
               <v-hover v-slot:default="{hover}">
                    <v-card 
                        :elevation="hover ? 12 : 2"
                        max-width="350"
                        min-width="220"
                        >
                        <v-card-text>
                            <v-layout column justify-center align-center>
                                <p class="ma-0">To Local Time & Date</p>
                                <p class="ma-0 mt-2 font-weight-bold">{{ new Date(`${date}`/1).toLocaleString() }}</p>
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
            todayDate: null,
            currentTime: null,
            unixTime: null,
            sample: null,
            date: null
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
            var h = todayTime.getUTCHours();
            var m = todayTime.getUTCMinutes();
            var s = todayTime.getUTCSeconds();
            m = this.checkTime(m);
            s = this.checkTime(s);
            return h + ' : ' + m + ' : ' + s;
        },
        checkTime(i) {
            if (i < 10) {i = "0" + i};
            return i;
        },
        convert() {
            console.log('Update')
        },
        getUnixDate(time) {
            var date = new Date(1562827332000);
            return date.toUTCString();
        },
        getConverted() {
            var converted = new Date(this.date).toString();
        }
    }
}
</script>

<style>

</style>
