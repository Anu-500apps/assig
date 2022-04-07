<template>
    <div>
        <h3 align="center"></h3>
      <center>  <label for="name">Name:</label>
        <input type="text" name="name" placeholder="enter name"><br>
        <label for="password">password:</label>
        <input type="password" name="password" placeholder="enter password"><br>
        <button @click="createCookie">Cookie</button></center>
    </div>
</template>
<script>

export default {
    name:"CookiE",
    data() {
        return{

        }
        
    },
    methods:{
        createCookie(){
            this.$cookies.set("name","Anuradha")
            this.$cookies.set("password","7330797147")
        }
    }
}
</script>
