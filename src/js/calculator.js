//
function imcCalculator() {

   console.log('run');

   const prevWeight = document.getElementById('weight').value;
   const prevHeight = document.getElementById('height').value;

   const weight = Number(prevWeight);
   const height = Number(prevHeight / 100);

   const alert = document.querySelector('.alert')

   if (typeof weight && height === false) {

      return alert.innerHTML = ` `;
   } else {

      console.log('its true');

      const imcResult = weight / (height * height);

      console.log(imcResult);

      function result() {

         if (imcResult <= 18.5) {

            return `

               <div style=' background: #dbb61233;color: #dbb612; ' class="resultData">
                   <p>${imcResult.toFixed(2)}</p>
                  <span>Abaixo do peso</span>
               </div>
            `
         } else if (imcResult >= 18.6 && imcResult <= 24.9) {

            return `

               <div style=' background: #0af58733;color: #0cb971; ' class="resultData">
                   <p>${imcResult.toFixed(2)}</p>
                  <span>Normal</span>
               </div>
            `
         } else if (imcResult >= 25 && imcResult <= 29.9) {

            return `

               <div style='background: #dbb61233;color: #dbb612;  ' class="resultData">
                   <p>${imcResult.toFixed(2)}</p>
                  <span>Sobrepeso</span>
               </div>
            `
         } else if (imcResult >= 30 && imcResult <= 34.9) {

            return `

               <div style=' background: #db8b1233;color: #db8b12; ' class="resultData">
                    <p>${imcResult.toFixed(2)}</p>
                  <span>Obesidade 1</span>
               </div>
            `
         } else if (imcResult >= 35 && imcResult <= 39.9) {

            return `

               <div style=' background: #dd650333;color: #dd6503; ' class="resultData">
                  <p>${imcResult.toFixed(2)}</p>
                  <span>Obesidade 2</span>
               </div>
            `
         } else if (imcResult > 40) {
            return `

               <div style=' background: #ff330033;color: #ff3300; ' class="resultData">
                    <p>${imcResult.toFixed(2)}</p>
                  <span>Obesidade 3</span>
               </div>
            `
         } else {

            return 'ERROR <br> Por favor reinicie a aplicação'
         }
      };

      function finalResult() {

         const resultScreen = document.querySelector('.resultScreen');
         const resultBubble = document.querySelector('.resultBubble');
         const resultData = result();

         console.log(resultData);

         resultBubble.innerHTML = resultData;
         resultScreen.classList.add('onScreen');
      }

      finalResult();
   }
}