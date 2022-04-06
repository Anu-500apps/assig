<template>
  <div>
    <button @click="fullnames()">FullName</button>
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