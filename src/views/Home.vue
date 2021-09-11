<template>
  <v-container>
    <v-row>
      Home
    </v-row>

    <v-row>
      <v-btn @click="goNext">
      go Page 
    </v-btn>
    </v-row>
    
    
  </v-container>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },

    data() {
      return{
        current_route: null,
      }
    }, //data 

    watch: {
      
    }, //watch 

    beforeRouteLeave (to, from, next) {
      console.log('to is activate : ', to.name)
      console.log('from is activate : ', from.name)
      // console.log('next is activate : ', next)

      this.current_route = from.name
      next()
      // const answer = window.confirm('저장되지 않은 작업이 있습니다! 정말 나갈까요?');
      // if (answer) {
      // next();
      // } else {
      // next(false);
      // }
    },

    

    mounted() {
      var _this = this
      window.onpopstate = function() {
        // _this.exitBrowser
        // console.log('What is location : ', location)
        
        console.log(' you try to back .....current_route ;', _this.current_route)
        if(_this.current_route == 'Home') {
          console.log('Do it Now !!!....')
          // window.browser.history.deleteUrl('http://localhost:8080/')
          console.log('History : ', window.history.length)
          // let backStroke = window.history.length
          // window.browser.history.deleteAll()
          _this.$router.go(-10)
          // location.replace('http://localhost:8080/');
          // let location = '/'
          // open(location, '_self').close()
        }
      };
      
    }, // mounted

    methods: {
      no_exitBrowser() {
        console.log(' current_route : ', this.current_route)
        
      },

      goNext() {
        this.$router.push('/page2')
      },

    }, //methods 
  }
</script>
