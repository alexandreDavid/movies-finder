<template>
  <div class="container mt-5">
    <div class="media">
      <img alt="App logo" class="mr-3" style="width: 50px;" src="../assets/logo.png">
      <div class="media-body">
        <h5>With movies finder you can find thousands of movies.</h5>
        <p>Start by enter the title of the movie you are looking for.</p>
      </div>
    </div>
    <form class="form" @submit.prevent="search(valueToSearch)">
      <div class="input-group">
        <input class="form-control"
          v-model="valueToSearch"
          type="search"
          placeholder="Search a movie"
          aria-label="Search a movie">
        <div class="input-group-append">
          <button class="btn btn-success" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import searchMixins from '@/mixins/search'

export default {
  name: 'Home',
  mixins: [searchMixins]
}
</script>
