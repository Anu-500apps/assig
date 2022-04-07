<template>
  <div id="app">
    <!--<img alt="Vue logo" src="https://img.freepik.com/free-photo/3d-grunge-room-interior-with-spotlight-smoky-atmosphere-background_1048-11333.jpg"><br />-->
    <!--<AdditonNumbers /> 
    <Anu1 />
    <Card  :msg="message" :name="name" :number="number" :array="array"></Card>
    <Static msg="This is static props" name="anu" number="23456789"></Static><br />
    <refeSe ref="name123" name="Anu">{{name}}</refeSe><br />
    <Anu />
    <Card />
    <Es6 />
    <Filter />
    <Fun />-->
    <Emit />
    <Tbale />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' 
//import AdditonNumbers from './components/AdditonNumbers.vue'
//import Anu1 from './components/AnuTest.vue'
//import Card from '@/new.vue' 
//import Static from '@/components/static.vue'
//import refeSe from '@/components/Refss.vue'
//import card from './components/Card.vue'
//import Es6 from './components/Es6.vue'
//import Filter from './components/Filter.vue'
//import Fun from './components/function-1.vue'
//import Emit from './components/Emit.vue'
//import Anu from '@/components/TableView.vue'
//import Table from '@/components/table.vue'
export default {
  name: 'App',
  components: {

    // HelloWorld,
    //AdditonNumbers,
    //Anu1,
    //Card,
    //Static,
    //refeSe,
    //card
    //Es6,
    //Filter
    //Fun
    //Emit,
    //Anu
    //Table

  
  },
  data(){
    return{
      message:"welcome to vue",
      name:"Anuradha",
      number:"7330797147",
    }
 },
 mounted:function(){
   this.message=this.$refs.name123.name;
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

