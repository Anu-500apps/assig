<template>
  <div><center>
    <button @click="handle()">Question10</button></center>
  </div>
</template>
    
    
    <script>
export default {
  name: "QuE10",

  methods: {
    handle() {
      try {
        this.out = this.count * 5;

        document.write("printing count ", this.count);
      }
       catch {
        document.write("count ");
      }
    },
  },
};
</script>