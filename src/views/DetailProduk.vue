<template>
  <Navbar />
  <Detail />
  <Footer />
</template> 

<script>
import Navbar from '@/components/Navbar.vue'
import Detail from '@/components/Detail.vue'
import Footer from '@/components/Footer.vue'
export default { 
  name: "DetailProduk", 
  components: {
    Navbar, 
    Detail,
    Footer
  }

}
</script>

<style>

</style>