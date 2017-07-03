<template>
  <div>
    <div  class="teaser-container">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'caseteaser',
  props: ['title', 'parentIndex', 'index', 'activeIndex'],
  data() {
    return {
      shown: false,
    };
  },

};
</script>

<style scoped lang="scss">
.teaser-container {
  background-color: green;
  text-align: center;
}
</style>
