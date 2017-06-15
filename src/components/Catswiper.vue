<template>
  <div class="categories" ref="categories">
    <swiper :options="mainSwiperOption" ref="mainSwiper" key="item.id" class="mainswiper">
      <swiper-slide v-for="(item,index) in content" key="item.id">
        <!-- <template :parentName="item.name">
            <caseteaser :parentIndex="index" v-for="item in item.slides" class="teaser" :title="item.title" key="item.id" ref="caseTeaser">
            </caseteaser>
        </template> -->
        <swiper class="teaser" :class="item.name" :options="teaserSwiperOption" key="item.id" :ref="('teaserSwiper' + index)">
          <swiper-slide v-for="item in item.slides" key="item.id">
            <caseteaser :parentIndex="index" :title="item.title" class="teaser"  key="item.id" ref="caseTeaser">
            </caseteaser>
          </swiper-slide>
        </swiper>
        <swiper class="preview" :class="item.name" :options="previewSwiperOption" key="item.id" :ref="('previewSwiper' + index)">
          <swiper-slide v-for="(item,index) in item.slides" key="item.id">
            <projectpreview :title="item.title"></projectpreview>
          </swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import exampledata from './exampledata';

import Projectpreview from './Projectpreview';

import Caseteaser from './Caseteaser';

export default {
  name: 'catswiper',
  props: [],
  data() {
    return {
      content: exampledata.content,
      translateTouchEnd: false,
      show: false,
      mainSwiperOption: {
        notNextTick: true,
        direction: 'vertical',
        grabCursor: true,
        keyboardControl: true,
        mouseWheelControl: true,
        slidesPerView: 1,
      },
      previewSwiperOption: {
        notNextTick: true,
      //  grabCursor: true,
      //  keyboardControl: true,
        onTouchEnd() {
          const app = this;
          app.translateTouchEnd = true;
          console.log(app.translateTouchEnd);
        },
        onSetTranslate(swiper, translate) {
          console.log(translate);
        },
        onSetTransition(swiper, transition) {
          console.log(transition);
        },
      },
      teaserSwiperOption: {
        notNextTick: true,
        grabCursor: true,
        keyboardControl: false,
        // effect: 'fade',
      },
    };
  },
  components: {
    Projectpreview, Caseteaser,
  },
  computed: {
    // swiper() {
    //   return this.$refs.previewSwiper1['0'];
    // },
  },
  methods: {
  //  swiperPreview
    iterate: function iterate(arr, callback) {
      let i;
      for (i = 0; i < arr.length; i += 1) {
          return callback;
        }
      },
    // showRightTeaser: function showRightTeaser(arr, snum) {
    //   const previewS = this.refs.previewSwiper[snum][0];
    //
    // },
    // magic: function magic(puff) {
    //   const app = this;
    //   const content = app.content;


    // }
    // findProperty: function findProperty(arr, prop, key) {
    //   if(arr[i])
    // }


  },
  mounted() {
    const allRefs = this.$refs;
    const app = this;
    // console.log(allRefs.previewSwiper1[0].swiper);
    // function getKeyedRefs(refKey) {
    //   console.log(allRefs[refKey]);
    //   return allRefs[refKey];
    // }
    setTimeout(() => {
      const refsArray = [];
      function getSlicedKeyedRefs(refs, refKey) {
       Object.keys(refs).forEach((key) => {
        if (key.slice(0, -7) === refKey) {
          refsArray.push(key);
        }
        return refsArray;
      });
      }
      function mutualControl(num) {
      const teasah = ('teaserSwiper' + num);
      const previeah = ('previewSwiper' + num);
      const swiperTeaser = allRefs[teasah][0].swiper;
      const swiperPreview = allRefs[previeah][0].swiper;
      swiperTeaser.params.control = swiperPreview;
      // swiperPreview.params.control = allRefs[teasah][0].swiper;
      // console.log('swiperPreview', swiperPreview);
      // console.log('swiperTeaser', swiperTeaser);
      }
      function doubleSwiperMagic() {
        getSlicedKeyedRefs(allRefs, 'preview');
        console.log('refsArray', refsArray);
        let i;
        for (i = 0; i < refsArray.length; i += 1) {
            const theIndex = refsArray.indexOf(refsArray[i]);
            console.log('refsArray instance:', refsArray[i]);
            console.log('refsArray instance index:', theIndex);
            mutualControl(theIndex);
           }
         }
      doubleSwiperMagic();
    }, 0.1);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.mainswiper {
  position: relative;
  width: 80vw;
  height: 60vh;
  .teaser {
    position: relative;
    z-index: 10;
    .swiper-slide {
      width: 100%;
      height: auto;
    }
  }
  .preview {
    position: relative;
    z-index: 1;
  }
  .swiper-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

}

</style>
