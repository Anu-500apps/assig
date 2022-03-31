<template>
  <div>
      <h1>This is Emit</h1>
    <h2>email:{{ name }}</h2>

    <input
      type="text"
      placeholder="enter the text"
      @change="$emit('userdetails', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "EmiT",

  methods: {
    userdetails(event) {
      this.$emit("anuradha", event.target.value);
    },
  },
};
</script>



