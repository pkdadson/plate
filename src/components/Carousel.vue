<template>
  <div>
    <!-- <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="580"
      style="text-shadow: 2px 2px 4px #000000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    > -->
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="TekPrenuer"
        text="Hello world!, we are happy to present this years techprenuer program."
        img-src="https://wowslider.com/sliders/demo-76/data1/images/bookshelf349946_1280.jpg"
      >
      <button type="button" class="btn btn-success p-0">Apply</button>
      </b-carousel-slide> -->

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://wowslider.com/sliders/demo-76/data1/images/camera349948_1280.jpg">
        <h1>Hello world!</h1>
        <button type="button" class="btn btn-danger">Read More</button>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://wowslider.com/sliders/demo-76/data1/images/purse407176_1280.jpg"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://wowslider.com/sliders/demo-76/data1/images/camera349948_1280.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel> -->
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
          <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      apply(){
        this.$router.push('/apply')
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
