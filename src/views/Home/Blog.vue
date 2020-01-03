<template>
    <div class="container">
           <div class="m-1">
             <h1>News</h1>
    <div v-for="(news, i) in newsData" :key="i">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col-auto d-none d-lg-block">
          <img width="200" height="200" :src="news.picture" alt="">
        </div>
        <div class="col p-2 d-flex flex-column position-static">
          <h3 class="mb-0">{{news.title}}</h3>
          <small class="mb-1 text-muted">{{news.time}}</small>
          <p class="card-text mb-auto">{{news.subtitle}}</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
      </div>
    </div>
      <div class="text-center py-3" v-if="loading">
                <i  style="font-size:80px" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            </div> 
            <div v-if="this.newsData.length === 0 && !loading" class="text-muted text-center py-3" style="font-weight: 900; font-size: 24px">
                <p>
                 Nothing to show
                </p>
              </div>
    
    <nav class="blog-pagination">
            <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
            <a class="btn btn-outline-primary" href="#">Older</a>
          </nav>
    </div>
    </div>
</template>

<script>
import http from '@/network/Base.js' 
import {mapState} from 'vuex'

export default {
    data(){
    return{
      newsData: '',
      loading: false,
    }
  },
    created(){
        this.loading = true
        http().get("/blog/get")
           .then(({data}) => {
               const params_arr = []
               data.forEach(el => {
                   params_arr.push(JSON.parse(el))
               })
               console.log(params_arr)
               this.newsData = [...params_arr]
            //    this.$store.commit('employee/setEmployeeDetails', this.tabdata)
               console.log(this.newsData)
            })
            .catch(err => {
                this.$snotify.error('Could not get the list of employees')
                this.$Progress.finish()
            })
            .finally(() => {
                this.loading = false
            })
    },
}
</script>

<style scoped>
/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}
.blog-pagination > .btn {
  border-radius: 2rem;
}

</style>