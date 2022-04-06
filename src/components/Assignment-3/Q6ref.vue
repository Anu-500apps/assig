<template>
    <div>
        <button type="submit" @onclick="myfunction()">This is refs</button>
    </div>
</template>
<script>
export default{
    name : "refeSe",
    props:{
        name:String,
    },
    data(){
        return{

        }
    },
    method:{
         myfunction() { 

             console.log(this.name)

         }
    }
}
</script>
