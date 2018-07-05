<template>
   <div class="masthead" style="background-image: url('./src/assets/mainimage.jpg')">
   <nav class="nav-bar">
     <span id="navbar-toggle">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
        <a href="#" id="logo">logo</a>
        <ul id="subb-nav">
          <li>
                <a href="#" class="nav-links common">Women</a>
            </li>
            <li>
                <a href="#" class="nav-links common">Men</a>
            </li>
            <li>
                <a href="#" class="nav-links common">About Us</a>
            </li>
            <li>
                <a href="#" class="nav-links common">Support</a>
            </li>
        </ul>
        <ul id="mainn-nav">
            <router-link to="/" activeClass="active" tag="li"><a class="nav-links common">Home</a></router-link>

            <li>
                <a href="#" class="nav-links common">Search</a>
            </li>
             <router-link to="/cart" class="cart-li" activeClass="active" tag="li"><a class="nav-links cart-link"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ({{itemsInCart}})</a></router-link>
            <li>
                <a href="#" class="nav-links common">Login</a>
            </li>

        </ul>
    </nav>
      <!-- <div class="overlay"></div> -->
      <div class="container" style="position: absolute;">
         <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
               <div class="site-heading">
                  <h1>Kera Collections</h1>
                  <span class="sub-heading">A Tradition With Care...</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
      ...mapGetters({
          itemsInCart: 'cartItems'
   })
   }
}
</script>

<style scoped>
.nav-bar {
  font-family: 'Josefin Sans', sans-serif;
}
.nav-bar {
  font-size: 18px;
  /* background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%); */
  background-color: rgba(0, 0, 0, 0.5);
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  padding-bottom: 10px;
}

#subb-nav {
  list-style-type: none;
  display: none;
  flex-direction: column;
}
#mainn-nav {
  list-style-type: none;
  display: none;
  flex-direction: column;
}

#mainn-nav li, #subb-nav li {
  text-align: center;
  margin: 15px auto;
}
#mainn-nav li.cart-li {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}


.nav-links,
#logo {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  /* transition:  color 0.5s ease; */
}

#logo:hover,
.nav-links:hover {
    text-decoration: underline;
  color: rgba(255, 255, 255, 1);
  /* background-color: rgba(0, 0, 0, 0.3); */
}

#logo {
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
}

#navbar-toggle {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
}

#navbar-toggle:hover {
  color: rgba(255, 255, 255, 1);
}

@media screen and (min-width: 768px) {

  .nav-bar {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }

  #mainn-nav {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

#subb-nav {
   display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: center;
}
  #mainn-nav li, #subb-nav li {
    margin: 0;
  }

  .nav-links {
    /* margin-left: 40px; */
    margin-left: 30px;
  }

  #logo {
    margin-top: 0;
  }

  #navbar-toggle {
    display: none;
  }

}

.masthead {
   margin-bottom: 30px;
   background: no-repeat center center;
   background-color: #868e96;
   background-attachment: scroll;
   position: relative;
   background-size: cover;
   background-position-y: 70%;
}
   .masthead .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      /* background-color: #212529; */
      opacity: .5;
   }

   .masthead .site-heading {
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
      .masthead .site-heading {
         padding: 200px 0;
      }
   }
</style>
