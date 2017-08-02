<template>
  <div>
    <div :id="('pagination-' + paginationPosition)" v-for="(value, key) in pagPos" v-if="(key === paginationPosition)">
      <template  v-for="(item,index) in slides"  v-if="pag(index, previewActiveIndex)">
        <div class="pag-item" :class="item.title" @click="goToSlide(index)">
          <img src="../assets/pagination--X.svg">
        </div>
        <!-- <paginateitem key="item.id" :parentIndex="index" @click="goToSlide(index)"></paginateitem> -->
      </template>
    </div>
  </div>
</template>

<script>
import paginateitem from './Paginateitem';

import same from './mixins';

import { Eventbus } from './eventbus';

export default {
  mixins: [same],
  name: 'pagination',
  props: [
    'categoryTitle', 'slides', 'mainIndex', 'paginationPosition',
  ],
  data() {
    return {
      previewActiveIndex: 0,
      pagPos: {
        before: '<',
        after: '>',
      },
      // after: aftPag,
    };
  },
  computed: {

    // befPag() {
    //   return ('index < previewActiveIndex');
    // },
    // aftPag() {
    //   return ('index > previewActiveIndex');
    // },
  },
  methods: {
    pag(ind, prAcInd) {
      if (this.paginationPosition === 'before') {
        return (ind < prAcInd);
      }
        return (ind > prAcInd);
      },
    goToSlide(ind) {
      Eventbus.$emit('go-to-slide', ind);
    },
    // pagPag(pos1, pos2, quant1, quant2) {
    //   const paginationPosition = this.paginationPosition;
    //   if (same(paginationPosition, pos1)) {
    //
    //   }
    // }

    // pagination items before selected item

  },
  component: [
    paginateitem,
  ],
  created() {
    Eventbus.$on('preview-active-index', (activeIndex, index) => {
    if (this.mainIndex === index) {
      this.previewActiveIndex = activeIndex;
      console.log('hepp' + this.previewActiveIndex);
      }
    });
  },
  beforeDestroy() {
  //  Eventbus.$off('preview-active-index', (activeIndex, index));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#pagination-before, #pagination-after {
    margin: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    height: 50vh;

 }
</style>
