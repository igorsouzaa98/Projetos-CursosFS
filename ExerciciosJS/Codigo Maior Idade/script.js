let inputNome = prompt('Digite o seu nome: ')
let inputIdade = prompt('Digite a sua idade: ')

let nome = inputNome
let idade = inputIdade

if( idade >= 18){
    document.write('Olá ' + nome + ' você é maior de idade!')
}else {
    document.write('Olá ' + nome + ', você é menor de idade!')
}
