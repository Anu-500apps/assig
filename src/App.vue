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
    <Q10 />
    <Q3 />
    
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
import Q10 from './components/Assignment-2/Q10.html'
import Q3 from './components/Assignment-2/Q3.vue'

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
    Q10,
    Q3
  
},
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
