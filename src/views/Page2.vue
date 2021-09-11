<template>
  <v-container>
    <v-row>
      Page 2 
    </v-row>
    
    <v-row>
      <v-btn @click="goBack">back</v-btn>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Page2',

    components: {
    },

    data() {
      return{

      }
    }, // data

    computed: {
        // ...mapState('G_NAME', [])
    }, // computed

    mounted() {
      
    }, // mounted

    methods: {
      goBack() {
        this.$router.push('/')
      },
    }, // methods

  }
</script>
