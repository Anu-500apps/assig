<template>
  <div>
    <h1>ES6 topics</h1>

    <h3>{{ students }}</h3>

    <button @click="fun()">click</button>

    <button @click="f1()">for Each</button>

    <button @click="f2()">map</button>
  </div>
</template>

<script>
export default {
  name: "FilTer",

  data() {
    return {
      students: [
        { name: "anu", grade: 96 },

        { name: "radha", grade: 84 },

        { name: "taddi", grade: 80 },

        { name: "Navya", grade: 95 },

        { name: "anusha", grade: 90 },
      ],

      array: [1,2,3,4,5,6],
    };
  },

  methods: {
    fun() {
      var studentGrades = this.students.filter((student) => {
        return student.grade > 90;
        console.log(studentGrades);
      });

      
    },

    f1() {
      this.array.forEach((arrayItems, index) => {
        console.log(arrayItems, index);
      });
    },

    f2() {
      this.array.map((arrayItems, index) => {
        if (index == 2) return 0;

        console.log(arrayItems, index);
      });
    },
  },
};
</script>