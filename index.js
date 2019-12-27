
var app = new Vue({
  el: '#app',
  data: {
    url:"http://localhost:3000/timeline/mob1",
    rows: []
  },
  methods:{
    window:onload = function(){
      config = {
        headers:{
          'Access-Control-Allow-Origin': '*'
        },
        withCredentials:true,
      }
      axios.get(app.url,{headers:this.headers})
        .then(function(res){
          app.rows = res.data
          console.log(res)
        })
        .catch(err => function(err){
          console.log(err)
        })
    },
  }
});
