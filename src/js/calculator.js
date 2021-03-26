//
const width = window.matchMedia("(min-width: 768px)");

width.matches ? document.querySelector('.header').classList.remove('startAnim') : '';

function imcCalculator() {

   const weight = Number(document.getElementById('weight').value),
      height = Number(document.getElementById('height').value.replace('.', '') / 100);

   console.log(height);

   if (weight === 0 || height === 0) {

      return console.log('false');
   } else {

      const imcResult = weight / (height * height);

      function result() {

         if (imcResult <= 18.5) {
            return `
               <div
                  class=" resultAnim resultData"
                  style='background: #dbb61233;color: #dbb612;'
                  >
                   <p>${imcResult.toFixed(2)}</p>
                  <span>Abaixo do peso</span>
               </div>
            `
         } else if (imcResult >= 18.5 && imcResult <= 24.9) {
            return `
               <div
               class=" resultAnim resultData"
               style=' background: #0af58733;color: #0cb971;' >
                   <p>${imcResult.toFixed(2)}</p>
                  <span>Normal</span>
               </div>
            `
         } else if (imcResult >= 25 && imcResult <= 29.9) {

            return `

               <div
                  class="resultAnim resultData"
                  style='background:#dbb61233; color:#dbb612;'
               >
                   <p>${imcResult.toFixed(2)}</p>
                  <span>Acima do peso</span>
               </div>
            `
         } else if (imcResult >= 30 && imcResult <= 34.9) {

            return `

               <div style=' background: #db8b1233;color: #db8b12; ' class=" resultAnim resultData">
                    <p>${imcResult.toFixed(2)}</p>
                  <span>Obesidade 1</span>
               </div>
            `
         } else if (imcResult >= 35 && imcResult <= 39.9) {

            return `

               <div style=' background: #dd650333;color: #dd6503; ' class=" resultAnim resultData">
                  <p>${imcResult.toFixed(2)}</p>
                  <span>Obesidade 2</span>
               </div>
            `
         } else if (imcResult > 40) {
            return `

               <div style=' background: #ff330033;color: #ff3300; ' class=" resultAnim resultData">
                    <p>${imcResult.toFixed(2)}</p>
                  <span>Obesidade 3</span>
               </div>
            `
         } else {

            return `
               <div class="resultData resultAnim" style='background: #aaa3;color: #555;'>
                  <span>calcule para ver o resultado</span>
               </div>
            `
         }
      };

      function mobileResult() {

         const ResultBubble = document.getElementById('resultMobileContainer');

         ResultBubble.innerHTML = result();
         ResultScreen.openResultScreen();
      };

      function deskResult() {

         const resultDeskBubble = document.getElementById('resultDeskContainer');
         resultDeskBubble.innerHTML = result();
      };

      if (width.matches) {

         document.getElementById('main').classList.remove('ResultScreenAnim')
         deskResult()
      } else {
         mobileResult();
      };
   }
}