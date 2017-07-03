<template>
  <div class="preview-wrapper">
    <template v-for="(item, index) in slides">
      <transition name="fade" mode="out-in">
      <caseteaser v-show="same(activeIndex,index)" :activeIndex="activeIndex" :index="index" class="teaser" :title="item.title" key="item.id" ref="caseTeaser">
      </caseteaser>
      </transition>
  </template>
    <swiper :options="previewSwiperOption" class="preview" :class="name" ref="previewSwiper">
      <swiper-slide class="preview" v-for="item in slides" key="item.id">
        <projectpreview :title="item.title"></projectpreview>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import projectpreview from './Projectpreview';

import same from './mixins';

import { Eventbus } from './eventbus';

import Caseteaser from './Caseteaser';

export default {
  mixins: [same],
  name: 'previewswiper',
  props: ['type', 'slides', 'name', 'title', 'index'],
  data() {
    return {
      activeIndex: 0,

      previewSwiperOption: {
      notNextTick: true,
       grabCursor: true,
       keyboardControl: true,
       onTouchEnd(swiper, touchend) {
      //    const app = this;
      //  app.translateTouchEnd = true;
      //    console.log('translateTouchEnd:', app.translateTouchEnd);
        },
        onSetTranslate(swiper, translate) {
      //    console.log('previewtranslate:', translate);
        },
        onSetTransition(swiper, transition) {
      //    console.log('previewtransition:', transition);
        },
      },
    };
  },
  watch: {
    activeIndex: {
      handler(newVal, oldVal) {
      this.emitPreviewActiveIndex(newVal);
      console.log(newVal, oldVal);
      },
    },
  },
  computed: {
    swiper() {
      return this.$refs.previewSwiper.swiper;
    },
  },
  methods: {
    emitPreviewActiveIndex(val) {
      Eventbus.$emit('preview-active-index', val);
      console.log('emitting?', this.activeIndex, val);
    },

    iterate: function iterate(arr) {
      let i;
      for (i = 0; i < arr.length; i += 1) {
          return arr[i];
        }
      },
  },
  components: {
    projectpreview, Caseteaser,
  },
  mounted() {
  //  console.log("data activeIndex before", this.activeIndex);
  //  console.log("swiper activeIndex before", this.swiper.activeIndex);
    // this.swiper.on('slideChangeEnd', (swiper) => {
    //   this.activeIndex = this.swiper.activeIndex;
    //   console.log("data activeIndex after", this.activeIndex);
    //   console.log("swiper activeIndex after", this.swiper.activeIndex);
    // });
    this.swiper.on('slideChangeStart', (swiper) => {
      this.activeIndex = this.swiper.activeIndex;
    //  console.log("data activeIndex after", this.activeIndex);
    //  console.log("swiper activeIndex after", this.swiper.activeIndex);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.preview-wrapper{
  display: flex;
  align-items: flex-start;
}
.swiper-container .preview {
  align-content: center;
  width: 100%;
  height: 100%;
  .swiper-slide {
    position: relative;
    z-index: 1;
  }
}
.teaser {
  position: absolute;
  text-align: center;
  z-index: 10;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
