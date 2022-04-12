<template>
  <div>
    <b-card
      title="Hello World"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
    <h1>This is Bcard</h1>
    <p v-for="Anu in table" :key="Anu.id">
      {{ table.name }}{{ table.description }}
    </p>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "BcarD",
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
