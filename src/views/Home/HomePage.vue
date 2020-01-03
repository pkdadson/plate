<template>
  <div class="home">
      <div>

    <Carousel />
      </div>
    <div class="p-2">
      <h3>NEWS & EVENTS</h3>
    </div>
        <div class="container">
        <News/>
        </div>
    <!-- <div class="news container-fluid">
      <div class="row justify-content-between">
        <div class="col-sm-3 p-1">
        <Latest/>
        </div>
        <div class="col-sm-3 p-1">

        <Announce/>
        </div>
      </div>
    </div> -->
      <div>
        <Counter/>
      </div>
      <div>
        <Team/>
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
import Team from '@/components/Team.vue'


export default {
  name: 'home',
  components: {
    Carousel,
    News,
    Latest,
    Announce,
    Counter,
    Team,
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
