<template>
  <div id="app">
   <h1>Vue Webpage</h1>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Table-v />
    <Vfor />
    <Local :msg="msg" :name="name" :number="number"></Local><br><br>
    <Child msg="This is static props" name="Anu" number="7330797147"></Child><br />
    <Bcard />
    <Emit />
    <btable/>
    <Q3 />
    <Q7 />
    <Q5 />
    <Q8 />
    <Q6  ref="name" name="Anu">{{name}}</Q6><br />
    <Q10 />
    <Q9 />
  </div>
</template>


<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TableV from './components/question1/TableV.vue'
//import Vfor from './components/questuin2/Vfor.vue'
//import Local from './components/question3/Local.vue'
//import Child from './components/question4/Child.vue'
//import Bcard from './components/question6/Bcard.vue'
//import Emit from './components/EmitQ5.vue'
//import btable from './components/btable.vue'
//import Q3 from './components/Assignment-2/Q3.vue'
//import Q7 from './components/Assignment-2/Q7.vue'
//import Q5 from './components/Assignment-3/Q5.vue'
import Q8 from './components/Assignment-3/Q8.vue'
import Q6 from './components/Assignment-3/Q6ref.vue'
import Q10 from './components/Assignment-3/Q10.vue'
import Q9 from './components/Assignment-3/Q9.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //TableV,
    //Vfor,
    //Child,
    //Local,
    //Bcard
    //Emit,
    //btable
    //Q3,
    //Q7
    //Q5,
    Q8,
    Q6,
    Q10,
    Q9
  
  
},
mounted:function(){
  this.$ref.Q6.name
  
}
  } 

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
