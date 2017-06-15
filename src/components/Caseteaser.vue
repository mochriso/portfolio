<template>
  <div class="teaser-container">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'caseteaser',
  props: ['title', 'parentIndex', 'parentName'],

};
</script>

<style scoped lang="scss">
.teaser-container {
  background-color: green;
}
</style>
