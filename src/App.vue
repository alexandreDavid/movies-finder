<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="/">MovieFinder</a>
    <form class="form-inline" @submit.prevent="search(valueToSearch)">
      <input class="form-control mr-sm-2"
        v-model="valueToSearch"
        type="search"
        placeholder="Search a movie"
        aria-label="Search a movie">
      <button class="btn btn-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
  <router-view />
</template>

<script>
import searchMixins from '@/mixins/search'

export default {
  mixins: [searchMixins]
}
</script>

<style>
body {
  background-color: var(--light);
}
</style>
