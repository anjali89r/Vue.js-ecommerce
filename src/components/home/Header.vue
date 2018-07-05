<template>
    <header class="masthead" style="background-image: url('./src/assets/mainimage.jpg')">
      <div class="overlay"></div>
      <div class="container">
         <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
               <div class="site-heading">
                  <h1>Kera Collections</h1>
                  <span class="sub-heading">A Tradition With Care...</span>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>
<style scoped>
header.masthead {
   margin-bottom: 30px;
   background: no-repeat center center;
   background-color: #868e96;
   background-attachment: scroll;
   position: relative;
   background-size: cover;
   background-position-y: 70%;
}
   header.masthead .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      /* background-color: #212529; */
      opacity: .5;
   }

   header.masthead .site-heading {
      text-align: center;
      color: #fff;
   }
   .sub-heading {
      font-size: 24px;
      font-weight: 300;
      line-height: 1.1;
      display: block;
      margin: 10px 0 0;

   }
   @media screen and (min-width: 768px) {
      header.masthead .site-heading {
         padding: 200px 0;
      }
   }

</style>
