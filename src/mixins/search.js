export default {
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
