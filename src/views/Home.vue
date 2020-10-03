<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="search" v-model="valueToSearch">
    <button @click="search(valueToSearch)">Search</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      valueToSearch: ''
    }
  },
  methods: {
    search (search) {
      this.$router.push({ path: 'result', query: { search } })
    }
  }
}
</script>
