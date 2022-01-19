const CPF = require('cpf')
const fs = require('fs')

console.log("Seja bem vindo cadastrador de CPFs")

const cpf=process.argv[2]

let cpfValido = CPF.isValid(cpf)

if (cpfValido) {
    console.log('cpf valido... salvado')
    fs.writeFileSync ('dados.txt', cpf + '\n', {flag:'a'})
}

else {
    console.log('cpf invalido')
}
console.log (" FIM")
