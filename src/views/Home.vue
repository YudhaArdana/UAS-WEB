<template>
  <div class="home">
    <Navbar />
    <Banner />
    <Preview />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import Preview from '@/components/Preview.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    Preview,
    Footer
  }
}
</script>
