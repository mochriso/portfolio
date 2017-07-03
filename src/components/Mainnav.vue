<template>
  <nav id="main-nav-first">
    <ul>
      <li v-for="(item,index) in content" key="item.id">
        <h5 v-show="same(paginationPosition,'before')">{{item.title}}</h5>
        <pagination v-if="(item.type === 'showtitle')" v-show="same(index,mainActiveIndex)" :categoryTitle="item.title" :slides="item.slides" :mainIndex="index" :paginationPosition="paginationPosition">
        </pagination>
      </li>
    </ul>

  </nav>
</template>

<script>
import pagination from './Pagination';

import same from './mixins';

export default {
  mixins: [same],
  name: 'main-nav',
  props: [
    'content', 'mainActiveIndex', 'paginationPosition',
  ],
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {
  },
  components: {
    pagination,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#main-nav-first {
  ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    list-style: none inside none;
    text-align: left;
    height: 50vh;
    li {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
