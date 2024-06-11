/*let fome = prompt('Você está com fome ou sem fome???')
let dinheiro = prompt('Você está com dinheiro ou sem dinheiro???')
let restaurante = prompt('está fechado ou aberto???')

if(fome === "sem fome" && dinheiro === "sem dinheiro"){
    console.log("Hoje a janta será em casa")
}
else if(fome==="com fome" && dinheiro === "com dinheiro" && restaurante === "fechado"){
    console.log("Peça um delivery")
}

else if(fome === "coom fome" && dinheiro === "com dinheiro" && restaurante === "aberto"){
    console.log("hoje o jantar será no seu restaurante preferido!!")
}*/

let nome = prompt('Qual o seu nome?')
let idade = Number(prompt('Qual a sua idade?'))
let cartMortorista = prompt('Possui habilitação?')
let posCarro = prompt('Possui carro?')

if (idade < 18 || cartMortorista === "Não"){
    console.log(nome+" ,você não pode dirigir.")
}
else if (idade > 18 || cartMortorista === "Sim" || posCarro == "Não"){
    console.log(nome+" ,você pode dirigir, mas não tem carro.")
}

else if (idade > 18 || cartMortorista === "Sim" || posCarro == "Sim"){
    console.log(nome+" ,você será o motorista!!")
}
