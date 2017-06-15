<template>
    <swiper :options="swiperOption" ref="teaserSwiper">
      <swiper-slide v-for="item in slides" key="item.id">
        <caseteaser><p>{{item.case}}</p></caseteaser>
      </swiper-slide>
    </swiper>
</template>

<script>
import Caseteaser from './Caseteaser';

export default {
  name: 'teaserswiper',
  props: ['type', 'slides', 'name'],
  data() {
    return {
      swiperOption: {
        grabCursor: false,
        keyboardControl: false,
        effect: 'fade',
        control: 'previewswiper',
      },
    };
  },
  methods: {
    iterate: function iterate(arr) {
      let i;
      for (i = 0; i < arr.length; i += 1) {
          return arr[i];
        }
      },
  },
  components: {
    Caseteaser,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: auto;
}

</style>
