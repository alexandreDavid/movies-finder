<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
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
