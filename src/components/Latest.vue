<template>
    <div >
      <h6>Latest News</h6>
  <div class="content">
    <a href="" target="_blank">
      <div class="content-overlay"></div>
      <img class="content-image" src="https://lh3.googleusercontent.com/owlrRTVkB6_i9yRY9pLYWZH4dE43GoC6xw2MkhXR_Rv19gEzT2iaJaKcUGIBC3iPkPHlLaFKBXaf1F-thvRLrR855r0b61fVaVqHaPavt2wlvAEpAhGt-H9EZBWHK-N8f24CzWee4DrHskkAqiL_5MZrMt8lFhuCipInn7Hppie3geZHpIvl1XwUzOGl1uVU0dmNqgp93rQrR7rmONM7NotDzsDT57y_4gIY_HW4kHwualOdaUu9E4Zn3R-oGnE75MDekcZtcVuaMSauCzpYvtb6eBk1KvjKQHPse8-q2H2BfA6fpL2y6mP0KORFQSg-Ok_pEDHqefIXmG8xWdEiNpN8h7O-EF4EBoXlr7_LtAkhdcav1qhm_0OqnM13lZv9tNBc1UqyrOQUg0-rJ38218XmrHHZRi1EL4r_unf1eLL7V8a0Oy-0_zIEhSulFsap7Fpt3chXhsKOHZwyRRfApJ5XC1ASnalFd1rQ46SAkXbn7jnZq8BJtQcAUg6GjygMfd06OAzMybccdG7SpbJmuABi_sp2pRwPJ6BNN79Gzo9q1iMH-Fxqgs3eGVb0hsUoRYV5rw8nfGIXNrURAn-esgqW6HcFsK16tD7BoLsrSSjQ_k93JCWCou6FZfh_84l7wzCUgSY0hYwOI_EwZ5lZR0toEanH-3k8yrptxvmEupbknYwKCvupTHXNBX_5YXoADjabZ7Dug5-QLE_eeTM_bQPcIxZ76LyIkIsiOdhAp4UsMzuU=w679-h638-no">
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>
</template>

<style scoped>

.main-title{
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}
@media screen and (max-width: 640px){
  .container{
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: 900px){
  .container{
    width: 33.33333%;
  }
}

.container .title{
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content-image{
  height: 300px;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom{
  top: 80%;
}

.fadeIn-top{
  top: 20%;
}
</style>

