<template>
<div class="container">
   <div class="row category-heading">
      <h4>Categories</h4>
   </div>
      <div class="row categories-row">
        <div class="col-md-4">
          <div class="containerBox">

  <img class="img-responsive category-image" src="/src/assets/dress.jpg">

  <div class='text-box'>
    <p class='dataNumber'> Salwars </p>
  </div>



</div>
        </div>
        <div class="col-md-4">
          <div class="containerBox">

  <img class="img-responsive category-image" src="/src/assets/dress4.jpg">

  <div class='text-box'>
    <p class='dataNumber'> Lehangas </p>
  </div>



</div>
        </div>
        <div class="col-md-4">
          <div class="containerBox">

  <img class="img-responsive category-image" src="/src/assets/dress3.jpg">

  <div class='text-box'>
    <p class='dataNumber'> Kids </p>
  </div>



</div>
        </div>
        <div class="col-md-4">
          <div class="containerBox">

  <img class="img-responsive category-image" src="/src/assets/dress4.jpg">

  <div class='text-box'>
    <p class='dataNumber'> Kurtis </p>
  </div>



</div>
        </div>
        <div class="col-md-4">
          <div class="containerBox">

  <img class="img-responsive category-image" src="/src/assets/dress.jpg">

  <div class='text-box'>
    <p class='dataNumber'> Necklace Sets </p>
  </div>



</div>
        </div>
        <div class="col-md-4">
          <div class="containerBox">

  <img class="img-responsive category-image" src="/src/assets/dress3.jpg">

  <div class='text-box'>
    <p class='dataNumber'> Bridal Collections </p>
  </div>



</div>
        </div>
      </div>
    </div>

</template>
<style scoped>
.category-heading {
   text-align: center;
   margin-bottom: 20px;
}
.containerBox {
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
}

.text-box {
  position: absolute;
  height: 41px;
  text-align: center;
  width: 100%;
   margin: auto;
  /* top: 90px; */
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 12px;
  background-color: #000;
}
.text-box:hover {
   background-color: #DD0017;
   cursor: pointer;
   font-size: 16px;
}
.img-responsive {
  display: block;
  max-width: 100%;
  height: 280px;
  margin: auto;
  padding: auto;
}

.dataNumber {
  /* margin-top: auto; */
  color: #fff;
  /* font-size: 12px; */
  text-align: left;
  margin: 0;
  padding-left: 10px;
  line-height: 50px;
}
.categories-row {
   text-align: center;
}
.category-image:hover {
   box-shadow: 2px 2px 2px 4px #000;
   cursor: pointer;
}
</style>
