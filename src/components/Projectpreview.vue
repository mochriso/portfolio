<template>
  <div class="p-container">
      <div class="p-child">
        <p>Bilde av {{title}}</p>
      </div>
  </div>
</template>

<script>
//     <router-link :to="{ name: 'Project', params: {projectItem: title} }">
//     </router-link>


export default {
  name: 'projectpreview',
  props: ['title'],
  data() {
    return {

    };
  },
  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang ="scss">
.p-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: pink;
   .p-child {
     flex-basis: auto;
     text-align: center;
   }
}

</style>
