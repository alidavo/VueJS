/*
a web client using VueJS that makes a request every second to an API:
 this project uses an API sample for the usernames and the photos it mostly focuses on VueJS layout and features .
 to Complete all requirements:
 1-needs to build a complete databases
 2-needs to build a  modified API

*/
 
const app = Vue.createApp({ //  a sample function to show some data in VueJS 
  data () {
    return {
      //firstName: 'John', 
      //lastName: 'Smith',
      //email: 'jhon@gmail.com',
      //number: '550099',
      //gender: 'male',
      photo: 'https://randomuser.me/api/portraits/men/10.jpg' // an API Web page to load the randomized photos
    }
  },

  methods: {
    async getUser(){ // This functions is to retrieve randomized data from an API  
      //  aysnc is to return data for requests either immediately or at a later time
      const res= await fetch('https://randomuser.me/api') //for accessing and manipulating parts of the HTTP such as requests and responses.
      const {results} = await res.json() // data in API is in json format:
      this.email = results[0].email     
      this.number = results[0].cell
      this.photo = results[0].picture.large 
      
    },

  },

})
app.mount('#app') 



  const app2 = Vue.createApp({ // this function uses a list of usernames and a list of randomize numbers to associate for each username
  el: "#app2",
  data() {
  return {
    list: ['Ashley','Andy','Andrew','Chad','Hiep','Sarah','Dave', 'James', 'Mathieu', 'Bob', 'Carina'],
    chosenName: '',
    list2: ['44','12','53','29','90','58','22','74', '94','18','42'],
    chosenNum: ''
  }
  },
  methods: {
    picker:async function(){
      const res= await fetch('https://randomuser.me/api')// an API sample to pull the usernames from a database (list and API) 
      const {results} = await res.json() 
      this.chosenPhoto = results[0].picture.large //pictures for each user 
      var chosenNamee = Math.floor(Math.random() * this.list.length);
      var chosenNamee2 = Math.floor(Math.random() * this.list.length-1);
      var chosenNamee3 = results [0].name.last
      var chosenNum = Math.floor(Math.random() * this.list2.length) ;
      var chosenNumm2 = Math.floor(Math.random() * this.list2.length-1) ;
      var chosenNumm3 = Math.floor(Math.random() * this.list2.length-2) ;
      
      // in this part the data is returned to the web client:
      this.chosenName = this.list[chosenNamee]; 
      this.chosenName2 = this.list[chosenNamee2];
      this.chosenName3 =  results [0].name.last
      this.chosenNum = this.list2[chosenNum];
      this.chosenNum2 = this.list2[chosenNumm2];
      this.chosenNum3 = this.list2[chosenNumm3];
    }
}

})
app2.mount('#app2')



