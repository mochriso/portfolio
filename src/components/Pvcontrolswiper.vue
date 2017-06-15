<template>
    <swiper :options="swiperOption" ref="PvControlSwiper">
      <swiper-slide v-for="item in slides" key="item.id">
        <projectpreview><p>{{item.case}}</p></projectpreview>
      </swiper-slide>
    </swiper>
</template>

<script>
import projectpreview from './Projectpreview';

export default {
  name: 'Pvcontrolswiper',
  props: ['type', 'slides', 'name'],
  data() {
    return {
      swiperOption: {
        grabCursor: true,
        keyboardControl: true,
        control: ['teaserswiper', 'previewswiper'],
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
