function iniciar(){
let inputNome = prompt('Digite o seu nome: ')
let inputIdade = prompt('Digite a sua idade: ')

if(inputNome ==='' || inputIdade ===''){
    alert('Preencha os campos corretamente!')
    return
}

let idade = parseInt(inputIdade)
let maiorOuMenor

if (idade >= 18) {
    maiorOuMenor = 'maior'
  } else if (idade < 18) {
    maiorOuMenor = 'menor'
  }

  let saudacao = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`

  document.querySelector('#saudacao').innerHTML = saudacao
}
