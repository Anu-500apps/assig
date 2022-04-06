<template>
    <div>
        <h1>iam child</h1>
        <h1>{{name}}</h1>
    </div>
</template>
<script>
export default{
    name : "refeSe",
    props:{
        name:String
    },
    methods:{
        fun(){
            alert()
        }
    }
}
</script>
