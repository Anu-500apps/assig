<template>
    <div>
        <h1>Add and Sub</h1>
        <button @click="fun1">Add</button>
        <button @click="fun1">sub</button>
    </div>
</template>
<script>

export default {
    name:"AddandSub",
    data() {
        return{
            users:[
                {name:"500apps",id:1},
                {name:"Technologies",id:2},
                {name:"Agile",id:3},
                {name:"Mantra",id:4},
                {name:"Clockly",id:5},
                {name:"CRM",id:6},
                {name:"500apps",id:7},]
        }
        
    },
    methods:{
        fun1(){
                console.log(users.add())
        }
    }
};
</script>
