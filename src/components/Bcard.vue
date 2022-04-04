<template>
  <div>
    <h1>This is Bcard</h1>
    <p v-for="Anu in table" :key="Anu.id">
    {{ table.name }}{{ table.description }}</p>
  </div>
</template>
<script>
export default {
    name:"BcarD",
    data() {
    return {
      table: [
        { name: "agile CRM", description: "A comapany of exsellence" },
        { name: "mantra technologies", description: "500apps" },
        { name: "500apps python", description: "Backend built using python" },
        { name: "500apps infinity", description: "Built using vue JS" },
      ],
    };
  },
};
</script>