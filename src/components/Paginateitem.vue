<template lang="html">
  <div class="pag-item" :class="item.title">
    <img src="../assets/pagination--X.svg">
  </div>
</template>

<script>
export default {
  name: 'paginateitem',
  props: ['parentIndex'],
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {

  },
  created() {

  },
  mounted() {

  },
};
</script>

<style scoped lang="scss">
.pag-item
  {
    cursor: pointer;
    margin: 0.2em;

  }
</style>
