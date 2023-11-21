GranEscolha = prompt('Deseja usar JS?')
if (GranEscolha == 'sim'.toLowerCase){
var QuantiaAceita = 0
/* Exercicio 1
  Elabore um algorito que imprima o produto de 28 por 43 */
  let EscolhaPorcentagem = prompt('você deseja utilizar porcentagem?')
  function porcentagem(numeral1,numeral2){
   var por  = numeral1 * numeral2
   return por / 100
  }
if (EscolhaPorcentagem == 'Sim' || EscolhaPorcentagem == 'sim'){
let Num1 = Number(prompt('digite o primeiro numero'))
let Num2 = Number(prompt('digite a porcentagem'))
var Final = porcentagem(Num1,Num2)
QuantiaAceita++;
alert('Aqui esta seu resultado! '+Final.toFixed(2))
}else{
    alert('entendo!')
}
/* Exercicio 2
 Elabore um algorito que imprima a média aritmética entre os números 8, 9 e 7 */
 let EscolhaMediaAritmetica = prompt('você deseja utilizar Media Aritmetica?')
 function MediaArit(numeral1,numeral2,numeral3){
    return (numeral1+numeral2+numeral3)/3
 }
 switch (EscolhaMediaAritmetica){
    case 'Sim':
        case 'sim':
        var numero1 = Number(prompt('digite o primeiro numero'))
        var numero2 = Number(prompt('digite o segundo numero'))
        var numero3 = Number(prompt('digite o terceiro numero'))
        var FinalMediaArit = MediaArit(numero1,numero2,numero3)
        QuantiaAceita++;
        alert('Aqui está seu resultado! '+FinalMediaArit.toFixed(2))
    case 'Não':
        alert('Entendo sua escolha!')
        break;
    default:
        alert('entendo!')
}
/* Exercicio 3
   Elabore um algoritmo que leia um número inteiro e imprima este número na tela */                                                                                                                                                                                                    
   const EscolhaInteger =prompt('deseja utilizar o Leitor de numero inteiro?')
   function numint(numeral1){
    numeral1 = Number(prompt('digite um numero inteiro'))
    if (numeral1 <=0){
        console.log('não é um numero inteiro')
    }else{
        console.log('é um numero inteiro')
    }
   }
if (EscolhaInteger == 'sim' || EscolhaInteger == 'Sim'){
numint()
QuantiaAceita++;
}else{
    alert('entendo!')
}
/* Exercicio 4
  Elabore um algoritmo que leia um número inteiro e imprima o antecessor deste numero */
const EscolhaAntece = prompt('deseja utilizar o Leitor de antecessores?')

function antecessor(numeral1){
    return numeral1-1
}
if (EscolhaAntece == 'Sim' || EscolhaAntece == 'sim'){
var Numeroint = Number(prompt('Escreva um numero inteiro para descobrir seu antecessor'))
var Anteced = antecessor(Numeroint)
QuantiaAceita++;
alert('O antecessor do seu numero é ' + Anteced)
}else{
    alert('entendo!')
}
/* Exercico 5
    Elabore um algoritmo oque leia dois valores e imprima a multiplicação dele se a divisão do primeiro pelo segundo número. */
    const EscolhaMultdivid = prompt('deseja utilizar o Leitor de multiplicação + divisão do resultado dessa multiplicação')
     function Divid (numeral1, numeral2){
       return numeral1/numeral2
    }
    if (EscolhaMultdivid == 'Sim' || EscolhaMultdivid == 'sim'){
        QuantiaAceita++;
    let Num1 = Number(prompt('Escreva o Primeiro numero'))
    let Num2 = Number(prompt('Escreva o Segundo numero'))
    let Mult = Num1*Num2
    let result = Divid(Num1,Mult)
    alert('resultado da multiplição '+Mult)
    alert(' resultado da divisão: '+result)
}else{
    alert('entendo!')
}
/* Exercicio 6
  Elabore um algoritmo que leia um valor e imprima sua terça parte. */
  const EscolhaATerçaParte = prompt('deseja utlizar o Leitor da terça parte de um valor?')
  function tercaparte(numeral1){
    return numeral1/3
  }
  if (EscolhaATerçaParte == 'Sim' || EscolhaATerçaParte == 'sim'){
    let Num1 = Number(prompt('Escreva um numero'))
    let terceiraparte = tercaparte(Num1)
    alert('A terça parte deste numero é '+terceiraparte)
    QuantiaAceita++;
}else{
    alert('entendo!')
}
/* Exercicio 7
   Elabore um algoritmo que o usuário possa informar o valor que ele em uma aplicação bancária.
    Após imprima o valor atual e o novo valor acrescido de 8%.Por exemplo, o usuário informou o valor 100.
    Então o programa deverá imprimir na tela 100 (valor que o usuário digitou) e 108 (valor acrescido de 8%)*/
    const EscolhaAplicaBanco = prompt('deseja utilizar o leitor de aplicação bancária')
    function Aplica (numeral1,numeral2){
        let numeroPorcento = numeral1*numeral2
        let acresimo = numeroPorcento/100
        return acresimo+numeral1
    }
    if (EscolhaAplicaBanco == 'sim' || EscolhaAplicaBanco == 'Sim'){
        let AplicaBanco =  Number(prompt('Escreva um valor para receber uma aplicação bancária'))
        let Porcento = 8
        let Aplicado = Aplica(AplicaBanco,Porcento)
        alert('Seu numero Original é: '+AplicaBanco+'\nSeu numero após uma aplicação bancária: '+Aplicado)
        QuantiaAceita++;
    }else{
        alert('entendo!')
    }
/* Exercicio 8
   Elabore um algoritmo que efetue o cálculo do salário líquido de um professor. 
   Os dados fornecidos serão: valor da hora aula, número de aulas dadas no mês e percentual de desconto do INSS(11%)
   .Para efetuar o cálculo, deverá ser multiplicado o valor da hora aula pelo número de aulas dadas no mês.
    Isso vai gerar o salário bruto. 
   O salário líquido pode ser obtido subtraindo 11% do salário bruto. */
   const EscolhaSalarioProf = prompt('deseja utilizar o calculador de salário de professor?')

   function Salario(numeral1, numeral2, numeral3) {
       let MultVal = numeral1 * numeral2;
       let Decresimo = MultVal / 100;
       return MultVal - Decresimo - numeral3;
   }
   if (EscolhaSalarioProf == 'Sim' || EscolhaSalarioProf == 'sim') {
       var valorHoraAula = Number(prompt('Digite o valor da hora aula'));
       var AulasDadasMes = Number(prompt('Digite o número de aulas dadas'));
       var PercentualInss = Number(prompt('Digite o percentual de desconto do INSS (11%)'));
       QuantiaAceita++;
       if (PercentualInss === 11) {
           var SalarioFinal = Salario(valorHoraAula, AulasDadasMes, PercentualInss);
           alert('O salário líquido deste professor foi: ' + SalarioFinal.toFixed(2));
       } else {
           alert('O percentual atual do INSS é 11%');
       }
   } else {
       alert('entendo!');
   }
/* Exercicio 9
   Elabore um algoritmo que efetua o cálculo do valor de uma prestação em atraso. 
   A fórmula que deverá ser utilizada é a seguinte: prestacao = valor + (valor * (taxa / 100) * tempo). 
   O usuário deverá informar tempo, valor e taxa*/
   const EscolhaPrestacaoEmAtraso = prompt('deseja utilizar o calculador de pretação em atraso?') 
   function Prestacao (numeral1,numeral2,numeral3){
    let Presta = numeral1 + (numeral1*(numeral2/100) * numeral3) 
    let resultado = Presta
    return resultado
   }
   if (EscolhaPrestacaoEmAtraso == 'Sim' || EscolhaPrestacaoEmAtraso == 'sim'){
   var Tempo = Number(prompt('Escreva o tempo da prestação'))
   var Valor = Number(prompt('Escreva o valor original'))
   var taxa = Number(prompt('Escreva o valor da taxa  '))
   var FinalPresta = Prestacao(Valor,taxa,Tempo)
   alert('A sua prestação em atraso é: '+FinalPresta)
}else{
    alert('entendo!')
}
/* Exercicio 10
   Elabore um algoritmo para ler o salário mensal de um funcionário e o percentual de reajuste. 
   Calcular e escrever o valor do novo salário considerando o percentual de reajuste informado. 
   O percentual de reajuste estará entre 0 e 100, podendo ser, por exemplo 19.5%.*/
   const EscolhaFuncionarioSalario = prompt('deseja utilizar o Calculador de reajuste de salatio de um funcionário?')
   function reajuste(numeral1,numeral2){
    if (numeral2 >= 0 && numeral2 <= 100){
        let par = numeral1*numeral2
        let acresimo = par/100
        return acresimo+numeral1
    }
   }
   if (EscolhaFuncionarioSalario == 'Sim' || EscolhaFuncionarioSalario == 'sim'){
   var SalarioMensal = Number(prompt('por favor digite o Salario mensal do funcionário'))
   var percentualReajuste = Number(prompt('digite o percentual de Reajuste (o percentual deve estar entre 0 e 100!'))
   let FinalReajuste = reajuste(SalarioMensal,percentualReajuste)
   QuantiaAceita++;
   alert('O resultado do reajuste do Salario está aqui: '+FinalReajuste)
  }else{
    alert('entendo!')
  }
/*  Exercicio 11
       Elabore um algoritmo
       para ler uma temperatura em graus Fahrenheit (F), calcular e escrever o valor correspondente 
       em graus Celsius (C).
       Abaixo está apresentada a fórmula para a conversão de valor. */
       const EscolhaFahrenheit = prompt('deseja usar o conversor de fahrenheit para celsius')
       function fahrenheit(numeral1){
        var converte = (numeral1-32)/1.8
        var result = converte
        return result
       }
       if (EscolhaFahrenheit == 'Sim' || EscolhaFahrenheit == 'sim'){
        let NumFahren = Number(prompt('Escreva um numero fahrenheit para  converter em celsius'))
        let result = fahrenheit(NumFahren)
        alert('Aqui está seu Fahreint convertido: '+result+' graus')
        QuantiaAceita++;
    }else{
    alert('entendo!')    
    }
/*  Exercicio 12
    Elabore um algoritmo para ler uma temperatura em graus Celsius, 
    calcular e escrever o valor correspondente em graus Fahrenheit */
    const EscolhaCelsius = prompt('deseja usar o conversor de celsius para fahrenheit')
    function Celsius (numeral1){
        let converte = (numeral1*1.8)
        let converte2 = converte+32
        let result = converte2
        return result
    }
    if (EscolhaCelsius == 'Sim' || EscolhaCelsius == 'sim'){
        let NumCelsius = Number(prompt('Escreva um numero celsius para fahrenheit'))
        let result = Celsius(NumCelsius)
        alert('Aqui está seus celsius convertido: '+result+' fahrenheit')
        QuantiaAceita++;
    }else{
        alert('entendo!')
    }
/*  Exercicio 13
    Elabore um algoritmo para ler o número total de eleitores de um município, 
    o número de votos brancos, nulos e válidos. 
    Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/
    const EscolhaEleita = prompt('Deseja usar o algoritmo de eleitores de um município?');
    function Eleicao(numeral1, numeral2, numeral3, numeral4) {
        if (numeral1 >= numeral2 && numeral1 >= numeral3 && numeral1 >= numeral4) {
            let percentualVotoBranco = (numeral2 * 100) / numeral1;
            let percentualVotoNulo = (numeral3 * 100) / numeral1;
            let percentualVotoValido = (numeral4 * 100) / numeral1;
    
            return (
                'O percentual de votos brancos é: ' +
                percentualVotoBranco.toFixed(2) +
                '%\nO percentual de votos nulos é ' +
                percentualVotoNulo.toFixed(2) +
                '%\nO percentual de votos válidos é: ' +
                percentualVotoValido.toFixed(2) +
                '%'
            );
        } else {
            return 'Erro: O número total de eleitores deve ser maior ou igual aos demais votos.';
        }
    }
    
    if (EscolhaEleita == 'Sim' || EscolhaEleita == 'sim') {
        var numTotalEleitor = Number(prompt('Digite o número total de eleitores do município'));
        var numTotalVotoBranco = Number(prompt('Digite o número total de votos em branco'));
        var numTotalVotoNulo = Number(prompt('Digite o número total de votos nulos'));
        var numTotalVotoValido = Number(prompt('Digite o número total de votos válidos'));
        let resultado = Eleicao(
            numTotalEleitor,
            numTotalVotoBranco,
            numTotalVotoNulo,
            numTotalVotoValido
        );
        alert(resultado);
        QuantiaAceita++;
    } else {
        alert('entendo!');
    }
/*  exercicio 14
    Todo restaurante, embora a lei não obrigue o cliente a pagar,o restaurante cobra 10% como taxa de serviço. 
    Escreva um algoritmo que leia o valor gasto pelo cliente em uma refeição e imprima o valor total da conta 
    adicionando o 
    percentual da taxa de serviço.*/
    const Escolhataxa = prompt('deseja usar o calculador de taxa de serviço (de restaurante)')
    if (Escolhataxa == 'Sim' ||  Escolhataxa == 'sim'){
        let ValorGasto = Number(prompt('digite o valor gasto no restaurante'))
        let percentual = 10
        let resultado = Aplica(ValorGasto,percentual)
        alert('O valor atual da conta é: '+resultado+'R$')
        QuantiaAceita++;
    }else{
        alert('entendo!')
    }
/*  exercicio 15
    Escreva um algoritmo para ler o raio de um círculo. 
    O programa deverá calcular e escrever a área do círculo na tela.
    Lembrando que a área do círculo é: raio = pi * raio2 */
    const EscolhaRaio = prompt('deseja calcular a área de um círculo?');
    function areaCirculo(pi, raio) {
    let raioAoQuadrado = raio ** 2;
    let area = pi * raioAoQuadrado;
    return area;
    }
    if (EscolhaRaio == 'Sim' || EscolhaRaio == 'sim') {
    let pi = 3.14;
    let Raiocircular = Number(prompt('Digite o valor do raio'));
    let result = areaCirculo(pi, Raiocircular);
    alert('A área do círculo é: ' + result)
    QuantiaAceita++;
    } else {
    alert('entendo!');
    }
/*  exercicio 16
    Para vários tributos, a base de cálculo é o salário mínimo.
    Elabore um algoritmo que leia o valor do salário mínimo
    e o valor do salário de uma pessoa. 
    O programa deverá calcular e imprimir quantos salários mínimos a pessoa ganha.*/
    const EscolhaSalarioMinimo = prompt('deseja usar o calculador de salarios minimos?')
    function QuantiaSalariomin (numeral1){
    let salariominimo = 1.320 
    let calculo = numeral1/salariominimo   
    return calculo
    }
    if (EscolhaSalarioMinimo == 'Sim' || EscolhaSalarioMinimo == 'sim'){
        let Salario = Number(prompt('digite o salario da pessoa'))
        let QuantSalMin = QuantiaSalariomin(Salario)
        alert('A quantia de salários minimos ganhos são: '+QuantSalMin.toFixed(-2))
        QuantiaAceita++;
    }else{
        alert('entendo!')
    }
    console.log('A quantidade de vezes aceitas foram: '+QuantiaAceita)
    if (QuantiaAceita == 16){
        document.write('id="quant"Obrigado por ter aceito todos')
    }
}else if(GranEscolha == 'não'.toLowerCase){
    alert('OK!')
}
