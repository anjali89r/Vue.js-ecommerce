<template>
   <nav class="nav-bar">
     <span id="navbar-toggle" @click="toggleMenu">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
        <a href="#" id="logo">logo</a>
        <ul id="sub-nav" >
          <li class="header-women" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
                <a href="#" class="nav-links women">Women <i class="icon-cross"></i></a>
                <div class="sub-menuWrap" v-show="active">
                    <h1>visible!</h1>
                </div>
            </li>
            <li class="header-men">
                <a href="#" class="nav-links">Men</a>
            </li>
            <li class="header-about">
                <a href="#" class="nav-links">About Us</a>
            </li>
            <li class="header-support">
                <a href="#" class="nav-links">Support</a>
            </li>
        </ul>
        <ul id="main-nav" >
            <router-link to="/" activeClass="active" tag="li"><a class="nav-links">Home</a></router-link>

            <li>
                <a href="#" class="nav-links">Search</a>
            </li>
             <router-link to="/cart" activeClass="active" tag="li"><a class="nav-links"><i class="fa fa-shopping-cart" aria-hidden="true"></i> ({{itemsInCart}})</a></router-link>
            <li>
                <a href="#" class="nav-links">Login</a>
            </li>

        </ul>
    </nav>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data() {
       return {
         menuActive: false,
          active: false
       }
   },
  computed: {
      ...mapGetters({
          itemsInCart: 'cartItems'
   })
   },
   methods: {
     toggleMenu() {
       let mainNav = document.getElementById('main-nav');
      let subNav = document.getElementById('sub-nav');
       this.menuActive = !this.menuActive;
       if(this.menuActive) {
         mainNav.style.display = 'flex';
        subNav.style.display = 'flex'
       }
       else {
         mainNav.style.display = 'none';
        subNav.style.display = 'none'
       }
     },
     showSubMenu() {
       this.active =  true;
     },
     hideSubMenu() {
       this.active =  false;
     }
   }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
 }
.nav-bar {
  font-family: 'Josefin Sans', sans-serif;
}
.nav-bar {
  font-size: 18px;
  /* background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%); */
  background-color: #000;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
}

#sub-nav {
  list-style-type: none;
  display: none;
  flex-direction: column;
}
#main-nav {
  list-style-type: none;
  display: none;
  flex-direction: column;
}

#main-nav li, #sub-nav li {
  text-align: center;
  margin: 15px auto;
}

.nav-links,
#logo {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}

#logo:hover,
.nav-links:hover {
  color: rgba(255, 255, 255, 1);
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

  #main-nav {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

#sub-nav {
   display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: center;
}
  #main-nav li, #sub-nav li {
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

.icon-cross:before {
   content: "\e117";
 }

 #sub-nav i {
    display: none;
 }

 [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
 }
 /* .header-women .sub-menuWrap {
   display: none;
} */
.sub-menuWrap {
  background-color: green;
}
</style>
