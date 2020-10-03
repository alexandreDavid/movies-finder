<template>
  <div class="search">
    <h1>Search</h1>
    {{ movies }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Result',
  data () {
    return {
      movies: []
    }
  },
  async mounted () {
    this.movies = (await axios.get(`http://www.omdbapi.com/?s=${this.$route.query.search}&apikey=48d1aa&type=movie`)).data
  },
  methods: {
    search (search) {
      this.$router.push({ path: 'result', query: { search } })
    }
  }
}
</script>
