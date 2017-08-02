export default {
  methods: {
  // Boolean Comparing two arguments
    same: function same(ind, acInd) {
      if (ind === acInd) {
        return true;
      }
        return false;
    },
    iterate: function iterate(arr, callback) {
      let i;
      for (i = 0; i < arr.length; i += 1) {
          return callback;
        }
      },
  },
};
