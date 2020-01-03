<template>
      
<div>
      <div class="row mb-2" >
        <div class="col-md-6 " v-for="(news, i) in newsData" :key="i">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">{{news.author}}</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">{{news.title}}</a>
              </h3>
              <div class="mb-1 text-muted">{{news.time}}</div>
              <p class="card-text mb-auto text-left">{{news.text}}</p>
              
        <router-link to="/blog" exact>Continue reading</router-link>
            </div>
          <img class="card-img-right flex-auto d-none d-md-block" :src="news.picture" alt="">

            <!-- <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"> -->
          </div>
        </div>

      </div>
      <div class="text-right px-2">
        <router-link to="/blog" exact> More ... </router-link>
       
      </div>
      <div class="text-center py-3" v-if="loading">
                <i  style="font-size:80px" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            </div> 
            <div v-if="this.newsData.length === 0 && !loading" class="text-muted text-center py-3" style="font-weight: 900; font-size: 24px">
                <p>
                 Nothing to show
                </p>
              </div>
    </div>


</template>

<script>
import http from '@/network/Base.js' 
import {mapState} from 'vuex'

export default {
  data(){
    return{
      news: '',
      loading: false,
    }
  },
  computed:{
      //     ...mapState({
      //       sz_companyid: (state) => state.corporate.company_id,
      //  }),
    },
    created(){
        this.loading = true
        http().get("/blog/get")
           .then(({data}) => {
               const params_arr = []
               data.forEach(el => {
                   params_arr.push(JSON.parse(el))
               })
               this.newsData = [...params_arr]
               this.newsData = this.newsData.filter((news, idx) => idx < 2)
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
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

.card-img-right {
  height: 100%;
  border-radius: 0 3px 3px 0;
}

.flex-auto {
  -ms-flex: 0 0 auto;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
}

.h-250 { height: 250px; }
@media (min-width: 768px) {
  .h-md-250 { height: 250px; }
}

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

/*
 * Blog name and description
 */
.blog-title {
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 400;
}
.blog-description {
  font-size: 1.1rem;
  color: #999;
}

@media (min-width: 40em) {
  .blog-title {
    font-size: 3.5rem;
  }
}

/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}
.blog-pagination > .btn {
  border-radius: 2rem;
}

/*
 * Blog posts
 */
.blog-post {
  margin-bottom: 4rem;
}
.blog-post-title {
  margin-bottom: .25rem;
  font-size: 2.5rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #999;
}


</style>