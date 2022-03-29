<template> 
 <div> 
    <h1>Address:{{ msg }}</h1> 
    <h1>Name:{{ name }}</h1> 
    <h1>Number:{{ number }}</h1> 
 </div>
</template> 
<script>
 export default
 {
     name:"ChilD",
 props:{
     msg:String,
     name:String,
     number:{
    default:1234345,
    type:Number
     },
   }
 }
    
</script>