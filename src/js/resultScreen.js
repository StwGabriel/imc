const resultScreen = document.querySelector('.resultScreen');
const ResultScreen = {

   openResultScreen() {

      resultScreen.classList.add('onScreen');
   },
   closeResultScreen() {

      resultScreen.classList.remove('onScreen');
   }
};