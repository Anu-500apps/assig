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
  </div>
</template>


<script>
//import HelloWorld from './components/HelloWorld.vue'
import TableV from './components/question1/TableV.vue'
//import Vfor from './components/questuin2/Vfor.vue'
//import Local from './components/question3/Local.vue'
//import Child from './components/question4/Child.vue'
import Bcard from './components/question6/Bcard.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    TableV,
    //Vfor,
    //Child,
    //Local,
    Bcard
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
