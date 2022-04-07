<template>
    <div>
        <h3 align="center"></h3>
        <button @click="createCookie">Cookie</button>
    </div>
</template>
<script>

export default {
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
