const Buttons = {

   decreaseWeight() {

      const weight = document.getElementById('weight');

      if (weight.value > 0) {

         return weight.value = Number(weight.value) - 1;

      } else {

         return ''
      }


   },

   increaseWeight() {

      const weight = document.getElementById('weight');

      return weight.value = Number(weight.value) + 1;

   },
   //
   decreaseHeight() {

      const height = document.getElementById('height');

      if (height.value > 0) {

         return height.value = Number(height.value) - 1;

      } else {

         return ''
      }

   },

   increaseHeight() {

      const height = document.getElementById('height');

      return height.value = Number(height.value) + 1;

   }
};
