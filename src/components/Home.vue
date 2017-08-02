<template>
  <div id="home">
    <header>
      <!-- <img src="./assets/logo.png"> -->
    </header>
    <section id="nav-content">
      <mainnav :content="content" :mainActiveIndex="activeIndex" :paginationPosition="'before'" ref="navBefore">
      </mainnav>
      <swiper :options="mainSwiperOption" ref="mainSwiper" key="item.id" class="mainswiper">
        <swiper-slide class="main" v-for="(item,index) in content" key="item.id">
          <previewswiper :mainActiveIndex="activeIndex" :index="index" class="preview" :type="item.type" :name="item.name" :title="item.title" :slides="item.slides"></previewswiper>
        </swiper-slide>
      </swiper>
      <mainnav :content="content" :mainActiveIndex="activeIndex" :paginationPosition="'after'" ref="navAfter">
      </mainnav>
    </section>
  </div>
</template>

<script>
import exampledata from './exampledata';

import Mainnav from './Mainnav';

import Previewswiper from './Previewswiper';

export default {
  name: 'home',
  props: [],
  data() {
    return {
      activeIndex: 0,
      content: exampledata.content,
      translateTouchEnd: false,
      initial: false,
      mainSwiperOption: {
        notNextTick: true,
        direction: 'vertical',
        grabCursor: true,
        keyboardControl: true,
        mouseWheelControl: true,
        slidesPerView: 1,
      },
    };
  },
  components: {
    Previewswiper, Mainnav,
  },
  computed: {
    swiper() {
      return this.$refs.mainSwiper.swiper;
    },
  },
  methods: {

  },
  created() {

  },
  mounted() {
    this.swiper.on('slideChangeStart', (swiper) => {
      this.activeIndex = this.swiper.activeIndex;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
html, body {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}
#home {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  .logo {
    text-align: left;
    margin: 2%;
    img {
      width: 5vw;
      height: auto;
    }
  }
}
header {
  height: 25%;
  img {
    max-width: 6em;
    margin: 0;
  }
}
#nav-content {
  display: flex;
  flex-direction: row;
  height: 75%;
}
#main-nav {
  width: 30vw;
}
.mainswiper {
  position: relative;
  width: 70vw;
  height: 60vh;

  .swiper-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

}

</style>
