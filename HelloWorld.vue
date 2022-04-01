<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>hello world</h1>
    <card>
  </div>
</template>

<script>
import card from './AdditonNumbers.vue'
export default {
  name: 'HelloWorld',
  components:{
    card,
  },
  props: {
    msg: String
  }
}
</script>

