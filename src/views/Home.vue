<template>
  <div class="home">
  <div class="container">
    <nav class="navbar navbar-expand navbar-fixed-top">
          <div class="nav-brand" >
            <a href="/" style="color: black;">TEKPRENEUR</a>
          </div>      
          <div id="menu-toggle" class="menu">
           <font-awesome-icon :icon="['fas', 'coffee']"/>
          </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/" style="color: black;">HOME</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/apply" style="color: black;">APPLY</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" style="color: black;">FAQ</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
    <router-view/>
      <div class="fixed-bottom">
        <Footer/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import News from '@/components/News.vue'
import Latest from '@/components/Latest.vue'
import Announce from '@/components/Announce.vue'
import Counter from '@/components/StatsCounter.vue'
import Footer from '@/components/Footer.vue'




export default {
  name: 'home',
  components: {
    Carousel,
    News,
    Latest,
    Announce,
    Counter,
    Footer
  }
}
</script>

<style scoped>
  /* top nav */
  .mynavbar a {
    display: flex;
    justify-content: flex-start;
    padding: 14px 16px;
    text-decoration: none;
  }

  .router-link-exact-active {
    border-left: 10px solid rgb(157, 157, 157);
  }
  
</style>
