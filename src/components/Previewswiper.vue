<template>
    <swiper :options="swiperOption" ref="previewSwiper">
      <swiper-slide v-for="item in slides" key="item.id">
        <projectpreview><p>Bilde av{{item.case}}</p></projectpreview>
      </swiper-slide>
    </swiper>
</template>

<script>
import projectpreview from './Projectpreview';

export default {
  name: 'previewswiper',
  props: ['type', 'slides', 'name'],
  data() {
    return {
      swiperOption: {
        grabCursor: true,
        keyboardControl: true,
        control: 'teaserswiper',
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
    projectpreview,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}

</style>
