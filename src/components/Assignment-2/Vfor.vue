<template>
  <div>
    <h2>This is Vfor-2Q</h2>
    <p v-for="Infor in Anu" :key="Infor.id">
      {{ Infor.text }}
    </p>
  </div>
</template>
<script>
export default {
  name: "VfoR",

  data() {
    return {
      Anu: [
        { text: "Name : Agile CRM" },

        { text: "description: A Company of Excellence" },

        { text: "years of experience: 12" },

        { text: "location:Hyderabad" },
      ],
    };
  },
};
</script>




