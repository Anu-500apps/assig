<template>
  <div>
    <!-- <div>

<form name="form">

<label for="Status">Status</label>

<select id='stat'>

<option>Select</option>

<option @click="opens()">open</option>

<p>{{opendata}}</p>


<option @click="pending()">Pending</option>

<option @click="close()">Closed</option>

</select>

</form>

</div>-->

    <button @click="opens()">Opens</button>

    <p>{{ opendata }}</p>

    <button @click="pending()">Pending</button>

    <p>{{ pendingdata }}</p>

    <p>{{ pendingdata1 }}</p>

    <button @click="closed()">Closed</button>

    <p>{{ closeddata }}</p>
  </div>

  <!-- <div>

<table>

<thead>

<tr>

<td>Email</td>

<td>Id</td>

<td>Name</td>

<td>Status</td>

</tr>

</thead>

<tbody>

<tr v-for="data1 in data" :key="data1.id">

<td>{{data1.opendata.email}}</td>

<td>{{data1.id}}</td>

<td>{{data1.name}}</td>

<td>{{data1.status}}</td>

</tr>

</tbody>

</table>


</div>-->
</template>


<script>
export default {
  name: "queS7",

  data() {
    return {
      data: [
        {
          email: "Eliseo@gardner.biz",
          id: 1,
          name: "id labore ex et quamlaborum",
          status: "open",
        },

        {
          email: "Jayne_Kuhic@sydney.com",
          id: 2,
          name: "quovero reiciendis velit similiqueearum",
          status: "pending",
        },

        {
          email: "Nikita@garfield.biz",
          id: 3,
          name: "odioadipisci rerum autanimi",
          status: "closed",
        },

        {
          email: "Lew@alysha.tv",
          id: 4,
          name: "alias odio sit",
          status: "pending",
        },
      ],

      opendata: "",

      pendingdata: "",

      pendingdata1: "",

      closeddata: "",

      text: "",
    };
  },

  methods: {
    opens() {
      this.opendata = this.data[0];
    },

    pending() {
      this.pendingdata = this.data[1];

      this.pendingdata1 = this.data[3];
    },

    closed() {
      this.closeddata = this.data[2];
    },
  },
};
</script>