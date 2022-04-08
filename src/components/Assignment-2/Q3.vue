<template>
  <div>
    <h1>This is question 3</h1>

    <p>{{ user1 }}</p>

    <p>{{ user2 }}</p>

    <button @click="detailfun()">clickme!</button>
  </div>
</template>

<script>
export default {
  name: "QuestioN",

  data() {
    return {
      array: [
        {
          category1: [
            {
              name: "cat1",
              description: "it is cat1",
              details: ["name", "category", "age", "contact"],
            },
          ],
        },
        {
          category2: [
            {
              name: "cat2",
              description: "it is cat2",
              details: ["name2", "category2", "age2", "contact2"],
            },
          ],
        },
      ],

      user1: " ",

      user2: " ",
    };
  },

  methods: {
    detailfun() {
      this.user1 = this.array[0].category1[0].details;

      this.user2 = this.array[1].category2[0].details;

      console.log(this.user1);

      console.log(this.user2);
    },
  },
};
</script>