<template>
    <div style="background-color: #E3DED5">
        
<section id="counter-stats">
	<div class="container">
		<div class="row">

			<div class="col-lg-3 stats">
				<i class="fas fa-people-carry" aria-hidden="true"></i>
				<div class="counter" data-count="400">0</div>
				<h5 >Participants</h5>
			</div>

			<div class="col-lg-3 stats">
				<i class="fa fa-calendar-check" aria-hidden="true"></i>
				<div class="counter" data-count="8">0</div>
				<h5>Weeks</h5>
			</div>

			<div class="col-lg-3 stats">
				<i class="fa fa-users" aria-hidden="true"></i>
				<div class="counter" data-count="10">0</div>
				<h5>Finalists</h5>
			</div>

			<div class="col-lg-3 stats">
				<i class="fa fa-trophy" aria-hidden="true"></i>
				<div class="counter" data-count="1">0</div>
				<h5>Prize</h5>
			</div>


		</div>
		<!-- end row -->
	</div>
	<!-- end container -->

</section>

    </div>
</template>

<script>
export default {
	data() {
		return{
			// counter1: 0,
			// counter2: 0,
			// counter3: 0,
			// counter4: 0
		}
},
// methods: {
//   countUpPart(num) {
//     const wait = 600  // in ms
//     this.counter1 = 0
//     const ref = setInterval(() => {
//       this.counter++
//       if(counter === num)
//         clearInterval(ref)
//     }, wait)
//   },
//   countUpFin(num) {
//     const wait = 600  // in ms
//     this.counter2 = 0
//     const ref = setInterval(() => {
//         clearInterval(ref)
// 		if(counter === num)
//       		this.counter++
//     }, wait)
//   },
//   countUpWeek(num) {
//     const wait = 600  // in ms
//     this.counter3 = 0
//     const ref = setInterval(() => {
//       this.counter++
//       if(counter === num)
//         clearInterval(ref)
//     }, wait)
//   },
//   countUpPriz(num) {
//     const wait = 600  // in ms
//     this.counter4 = 5
//     const ref = setInterval(() => {
//       this.counter++
//       if(counter === num)
//         clearInterval(ref)
//     }, wait)
//   },
// },
	
//   mounted () {
// 	let val = document.getElementsByClassName("counting");
// 	val.counterUp({
// 	delay: 10,
// 	time: 2000
// 	});
// 	},

	mounted(){
		$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 7000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      $this.text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    complete: function() {
      $this.text(this.countNum);
    }

  });  
  
  

});
	}
}
</script>

<style scoped>
    /*/ start count stats /*/

section#counter-stats {
	display: flex;
	justify-content: center;
	padding-top: 50px;
   padding-bottom: 50px;
}

.stats {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.stats .fa {
  color: #008080;
  font-size: 60px;
}
.fas{
	color: #008080;
  font-size: 60px;
}

/*/ end count stats /*/
</style>