<template>
    <Navbar />
    <CardList />
    <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardList from '@/components/CardList.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'List',
  components: {
    Navbar,
    CardList,
    Footer,
  }
}
</script>

<style>

</style>