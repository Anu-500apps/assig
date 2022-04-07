<template> 
<div> 
    <h1>Message:{{ msg }}</h1> 
    <h1>Name:{{ name }}</h1> 
    <h1>Number:{{ number }}</h1> 
</div>
  </template> 
  
<script>
 export default{
     name:"HeW",
 props:{
     msg:String,
     name:String,
     number:{
    default:1234,
    type:Number
     },
   }
 }
    
</script>