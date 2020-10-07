<template>
  <div class="search mt-3 container-fluid">
    <div v-if="isLoading" class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div v-else-if="error" class="alert alert-danger" role="alert">{{ error }}</div>
    <template v-else >
      <h3>Search: <b>{{ $route.query.search }}</b> <span class="badge badge-pill badge-secondary">{{ totalResults }}</span></h3>
      <vue-horizontal-list :items="movies" :options="options">
        <template v-slot:default="{item}">
          <MovieSlider :movie="item" />
        </template>
      </vue-horizontal-list>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import VueHorizontalList from '@/components/HorizontalList'
import MovieSlider from '@/components/MovieSlider'

export default {
  name: 'Result',
  components: { VueHorizontalList, MovieSlider },
  data () {
    return {
      movies: [],
      totalResults: 0,
      isLoading: false,
      error: false,
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 4 }
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,

          // Because: #app {padding: 80px 24px;}
          padding: 24
        }
      }
    }
  },
  watch: {
    '$route.query.search': 'fetchMovies'
  },
  async mounted () {
    await this.fetchMovies()
  },
  methods: {
    async fetchMovies () {
      this.isLoading = true
      this.error = false
      if (!this.$route.query.search) {
        return this.$router.push({ name: 'Home' })
      }
      const response = (await axios.get(`http://www.omdbapi.com/?s=${this.$route.query.search}&apikey=48d1aa&type=movie`)).data
      if (response.Response === 'True') {
        this.movies = response.Search
        this.totalResults = response.totalResults
      } else {
        this.error = response.Error
      }
      this.isLoading = false
    }
  }
}
</script>
