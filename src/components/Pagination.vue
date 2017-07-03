<template>
  <div id="pagination">
    <template v-for="(item,index) in slides" v-if="!same(item)">
      <div key="item.id" class="pag-child" :class="item">
        <img src="../assets/pagination--X.svg">
      </div>
    </template>
  </div>
</template>

<script>
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
    };
  },
  computed: {

  },
  methods: {

  },
  created() {
    Eventbus.$on('preview-active-index', function fn(activeIndex) {
      console.log("catswiper here! recieving your no" + activeIndex + " as the active index!");
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#pagination {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 50vh;
    .pag-child
      {
        margin: 0.2em;

      }
 }
</style>
