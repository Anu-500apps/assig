<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
    name:"BtablE",
    data() {
      return {
        fields:['iso3','name'],
        items: [{ name: 'Barbados', iso3: 'BRB' },
  { name: 'Brunei Darussalam', iso3: 'BRN' },
  { name: 'Bhutan', iso3: 'BTN' },
  { name: 'Bouvet Island', iso3: 'BVT' },
  { name: 'Botswana', iso3: 'BWA' },
  { name: 'Central African Republic', iso3: 'CAF' },
  { name: 'Canada', iso3: 'CAN' },
  { name: 'Cocos (Keeling) Islands', iso3: 'CCK' },
  { name: 'Switzerland', iso3: 'CHE' },
  { name: 'Chile', iso3: 'CHL' },
  { name: 'China', iso3: 'CHN' },
  { name: "Côte d'Ivoire", iso3: 'CIV' },
  { name: 'Cameroon', iso3: 'CMR' },
  { name: 'Congo, Democratic Republic of the', iso3: 'COD' },
  { name: 'Congo', iso3: 'COG' },
  { name: 'Cook Islands', iso3: 'COK' },
  { name: 'Colombia', iso3: 'COL' },]
      }
    }
  }
</script>