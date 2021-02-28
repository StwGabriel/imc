
function IMC() {

    const form = document.querySelector('.form'),
        finalResult = document.querySelector('.result'),
        alert = document.querySelector('.alert');


    form.addEventListener('submit',

        (event) => {
            event.preventDefault();

            const weight = form.querySelector('.weight').value,
                height = form.querySelector('.height').value;

            if (typeof weight && height == false) {

                return alert.innerHTML = `<span class='alertSpan'>Preencha todos os campos  *</span>`;
            } else {

                const imcResult = weight / (height * height);
                   function result() {
                    
                        if (imcResult <= 18.5) {

                            return 'Abaixo do Peso'
                        } else if (imcResult >= 18.6 && imcResult <= 24.9) {

                            return 'Com o peso normal'
                        } else if (imcResult >= 25 && imcResult <= 29.9) {
                            return 'Com sobrepeso'
                        } else if (imcResult >= 30 && imcResult <= 34.9) {
                            return 'Com Obesidade 1° grau'
                        } else if (imcResult >= 35 && imcResult <= 39.9) {
                            return 'Com Obesidade 2° grau'
                        }else {
                            return 'Com Obesidade 3° grau'
                       };
                };
                    
                const value = `<div class="imcblock"><h4>Seu IMC é:</h4><p>${imcResult.toFixed(2)}</p></div<div class="imcblock"><h4>Você está:</h4><p>${result()}</p></div>`

                finalResult.innerHTML = value
            }
        })
}

IMC()