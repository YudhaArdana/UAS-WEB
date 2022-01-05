<template>
    <Navbar />
    <CardList />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardList from '@/components/CardList.vue'

export default {
  name: 'List',
  components: {
    Navbar,
    CardList,
  }
}
</script>

<style>

</style>