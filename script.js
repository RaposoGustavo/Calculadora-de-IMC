function calcular(){
    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value

        if(peso !== "" && altura !== ""){
            var imc = (peso / (altura * altura)).toFixed(2)
            var mensagem = ""

            if(imc < 18.5){
                mensagem = "Abaixo do peso!"
            }else if(imc < 25){
                mensagem = "Peso ideal!"
            }else if(imc < 30){
                mensagem = "Acima do peso!"
            }else if(imc < 35){
                mensagem = "Obesidade grau I!"
            }else if(imc < 40){
                mensagem = "Obesidade grau II!"
            }else{
                mensagem = "Obesidade grau III!"
            }
            resultado.textContent = `${nome}, seu IMC é ${imc}. ${mensagem}`
        }else{
            resultado.textContent = "[ERRO] Verifique os dados e tente novamente!"
        }
}
