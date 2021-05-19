const butao = document.getElementById('button');

// ? é igual a um IF e se houver um : significa um Else

function imc() {

    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value; /*assim que pegamos o valores dentro dos inputs(sem esse value seria possivel declarar a variavel)*/
    const resultado = document.getElementById('result');

    if (altura !== '' && peso !== '') {

        const IMC = (peso / (altura * altura)).toFixed(1);/*Este toFixed é para arredondar quantas casas eu desejar*/

        let classes = '';


        if (IMC < 18.5) {
            classes = 'abaixo do peso';

        } else if (IMC > 18.6 && IMC < 29.9) {
            classes = 'com peso ideal,parabéns!!!!';

        } else if (IMC > 30.0) {
            classes = 'Obeso';
        }


        resultado.textContent = `Seu IMC é igual a: ${IMC}, e você está ${classes}`; /*para colocar dentro uma variável, basta usar a duas crases (Shift+assento agudo) e utilizar  ${variável}*/

    } else {
        resultado.textContent = 'Preencha todos os campos!'; /*Aqui atribuimos valores a caixa*/
    }


}

butao.addEventListener('click', imc);
