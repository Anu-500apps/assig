<template>
    <div>
        <h1>This is function block</h1>
       <p v-for="arra in array" :key="arra.id"> 
           {{arra.name}}{{arra.phone}}</p>
            <button type="submit" @click="function1()">Click here</button>
    </div>
</template>
<script>
export default {
    name:"FuN",
    data(){
        return{
            array:[{name:"anu",phone:"12345678"},
                   {name:"radha",phone:"345671237"},
                   {name:"anusha",phone:"987366868"},
              ],
              value:[1,2,3,4]};
        },
    methods:{
        function1(){
            console.log(this.array);
            console.log(this.value);
        }
    }
     
        
};
</script>
