<template>
  <div><center>
    <button @click="fullnames()">FullName-Q5</button></center><br><br><br>
  </div>
</template>
<script>
export default {
  name: "quesT5",

  data() {
    return {
      first_name: "Mantra",

      last_name: "Technologies",
    };
  },

  methods: {
    fullnames() {
      var fullname = this.first_name + this.last_name;

      console.log(fullname);
    },
  },
};
</script>